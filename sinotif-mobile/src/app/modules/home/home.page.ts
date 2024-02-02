import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { IonicSlides, ModalController } from "@ionic/angular";
import { NewsSearchComponent } from "../../components/news-search/news-search.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  runningText: string = "Selamat datang di aplikasi Sinotif STIKOM";
  slides: any[] = [];
  news: any[] = [];
  bannersCollection = "banners";
  newsCollection = "news";

  constructor(
    private fs: AngularFirestore,
    private iab: InAppBrowser,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    console.log("ngOnInit HomePage");

    this.fs
      .collection(this.bannersCollection, (ref) =>
        ref.where("status", "==", "Published").orderBy("urut").limit(3)
      )
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
        this.slides = data;
      });

    // this.fs
    //   .collection(this.newsCollection, (ref) =>
    //     ref.where("status", "==", "Published").orderBy("date", "desc").limit(3)
    //   )
    //   .valueChanges()
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.news = data;
    //   });

    this.fs
      .collection(this.newsCollection, (ref) =>
        ref.where("status", "==", "Published").orderBy("date", "desc").limit(3)
      )
      .snapshotChanges()
      .subscribe((data) => {
        this.news = [];

        data.map((action) => {
          const id = action.payload.doc.id;
          const data = action.payload.doc.data() as any;
          const news = {
            id: id,
            title: data.title,
            date: data.date,
            status: data.status,
            image: data.image,
            slug: data.slug,
            body: data.body,
          };

          this.news.push(news);
        });

        console.log(this.news);
      });
  }

  goToNotif() {
    console.log("goToNotif");
  }

  goToMenu() {
    console.log("goToMenu");
  }

  goToLink(url: string) {
    const options =
      "cleardata=yes,clearcache=yes,hardwareback=no,location=yes,zoom=no,hideurlbar=yes,hidenavigationbuttons=yes,closebuttoncaption=Return to App";
    // this.iab.create(url, "_self", options);
    this.iab.create(url, options);
  }

  async openSearch() {
    console.log(status);
    const modal = await this.modalCtrl.create({
      component: NewsSearchComponent,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("data =>", data);
    // if (data) {
    //   this.filter = data;
    // }
  }
}
