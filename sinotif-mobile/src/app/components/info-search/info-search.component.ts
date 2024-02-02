import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  LoadingController,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-info-search",
  standalone: true,
  templateUrl: "./info-search.component.html",
  styleUrls: ["./info-search.component.scss"],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonSearchbar,
    FormsModule,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    CommonModule,
  ],
})
export class InfoSearchComponent implements AfterViewInit {
  filter: any;
  status: any;
  segment: any;

  public loading: HTMLIonLoadingElement;
  showSpinner: boolean;
  datahtml: any;
  queryText: any;
  resposeData: any;
  items: any;
  jumlah: any;
  totalPage: any;
  page: any;
  collections = "notifications";
  recent: any;
  popular: any;

  constructor(
    private navParams: NavParams,
    private cdr: ChangeDetectorRef,
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private fs: AngularFirestore,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.status = this.navParams.get("status");
    console.log("ini paramnya => ", this.status);

    this.cdr.detectChanges();

    if (this.status === "popular") {
      this.fs
        .collection(this.collections, (ref) =>
          ref.where("status", "==", "Featured").orderBy("date", "desc")
        )
        .snapshotChanges()
        .subscribe((data) => {
          this.items = [];

          data.map((action) => {
            const id = action.payload.doc.id;
            const data = action.payload.doc.data() as any;
            const datahtml =
              data.notification.title + "<br/>" + data.notification.body;
            const notif = {
              id: id,
              title: data.notification.title,
              date: data.date,
              status: data.status,
              image: data.notification.image,
              body: data.notification.body,
              datahtml: datahtml,
            };

            this.items.push(notif);
          });

          console.log(this.items);
        });
    } else if (this.status === "recent") {
      this.fs
        .collection(this.collections, (ref) =>
          ref.where("status", "==", "Published").orderBy("date", "desc")
        )
        .snapshotChanges()
        .subscribe((data) => {
          this.items = [];

          data.map((action) => {
            const id = action.payload.doc.id;
            const data = action.payload.doc.data() as any;
            const notif = {
              id: id,
              title: data.notification.title,
              date: data.date,
              status: data.status,
              image: data.notification.image,
              body: data.notification.body,
            };

            this.items.push(notif);
          });

          console.log(this.items);
        });
    }
  }

  doRefresh(event) {
    console.log("Begin async operation");
    this.page = 1;

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 500);
  }

  cari(event) {
    this.page = 1;
    console.log(this.queryText);

    if (this.status === "popular") {
      this.popular = this.items;

      this.popular = this.popular.filter((item) => {
        console.log(item);
        // return (
        //   item.PNS_PNSNAM.toLowerCase().indexOf(this.queryText.toLowerCase()) >
        //     -1 ||
        //   item.NMUNOR.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1
        // );
      });
    } else {
      this.recent = this.items;
    }
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

  doInfinite(event) {
    this.page = this.page + 1;
    console.log(this.page);

    setTimeout(() => {
      event.target.complete();
    }, 5000);
  }

  searchclear() {
    this.queryText = "";
    this.page = 1;
    // console.log(this.status);
    // console.log(this.items);

    // if (this.status == "popular") {
    //   this.items = this.popular;
    // } else {
    //   this.items = this.recent;
    // }
  }

  openInfoDetail(info: any) {
    this.dismiss(info);
    this.router.navigateByUrl("/app/tabs/info/" + info.id);
  }
}
