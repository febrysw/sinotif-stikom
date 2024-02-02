import { Component, OnInit, ViewEncapsulation, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";

import {
  MenuController,
  NavController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { StatusBar } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

import { Storage } from "@ionic/storage-angular";

import { UserData } from "./providers/user-data";
import { FcmService } from "./services/fcm/fcm.service";
import { AlertService } from "./services/alert/alert.service";
import firebase from "firebase/compat/app";
import { environment } from "../environments/environment";

import { register } from "swiper/element/bundle";
register();

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: "Beranda",
      url: "/app/tabs/home",
      icon: "home",
    },
    {
      title: "Informasi",
      url: "/app/tabs/info",
      icon: "information-circle",
    },
    {
      title: "Nilai",
      url: "/app/tabs/grade",
      icon: "school",
    },
    {
      title: "Keuangan",
      url: "/app/tabs/finance",
      icon: "wallet",
    },
    // {
    //   title: "Profil",
    //   url: "/app/tabs/profile",
    //   icon: "person-circle",
    // },
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private fcm: FcmService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    const alert = inject(AlertService);

    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentUrl = this.router.url;
      if (currentUrl === "/app/tabs/home") {
        // this.withAlert("Do you really want to exit?", () => {
        //   navigator["app"].exitApp();
        // });

        alert.openAlert(
          "",
          "Keluar Aplikasi",
          "Apakah anda yakin mau keluar?",
          "buttonCss",
          [
            {
              text: "Cancel",
              role: "cancel",
            },
            {
              text: "Ok",
              handler: () => {
                navigator["app"].exitApp();
              },
            },
          ]
        );
      } else {
        this.navCtrl.back();
      }
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.available.subscribe(async (res) => {
      const toast = await this.toastCtrl.create({
        message: "Update available!",
        position: "bottom",
        buttons: [
          {
            role: "cancel",
            text: "Reload",
          },
        ],
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    firebase.initializeApp(environment.firebaseConfig);

    this.platform
      .ready()
      .then(() => {
        console.log("initializeApp : ", this.platform.is("mobile"));
        console.log("initializeApp : ", this.platform.is("hybrid"));
        if (this.platform.is("hybrid")) {
          StatusBar.hide();
          SplashScreen.hide();
        } else if (this.platform.is("mobile")) {
          // console.log("platform is mobile");
          // StatusBar.setBackgroundColor({ color: "#802b5a" });
          // this.fcm.initPush();
        }
        StatusBar.setBackgroundColor({ color: "#802b5a" });
        this.fcm.initPush();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then((loggedIn) => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener("user:login", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:signup", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:logout", () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl("/app/tabs/home");
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set("ion_did_tutorial", false);
    this.router.navigateByUrl("/tutorial");
  }
}
