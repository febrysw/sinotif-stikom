import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
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
  selector: "app-news-search",
  standalone: true,
  templateUrl: "./news-search.component.html",
  styleUrls: ["./news-search.component.scss"],
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
export class NewsSearchComponent implements AfterViewInit {
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
  collections = "news";
  recent: any;
  popular: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private modalCtrl: ModalController,
    private fs: AngularFirestore,
    private router: Router,
    private iab: InAppBrowser
  ) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
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
          const datahtml = data.title + "<br/>" + data.body;
          const notif = {
            id: id,
            title: data.title,
            date: data.date,
            status: data.status,
            image: data.image,
            body: data.body,
            slug: data.slug,
            datahtml: datahtml,
          };

          this.items.push(notif);
        });

        console.log(this.items);
      });
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
  }

  openInfoDetail(news: any) {
    this.dismiss(news);
    this.router.navigateByUrl("/app/tabs/news/" + news.id);
  }

  goToLink(url: string) {
    const options =
      "cleardata=yes,clearcache=yes,hardwareback=no,location=yes,zoom=no,hideurlbar=yes,hidenavigationbuttons=yes,closebuttoncaption=Return to App";
    // this.iab.create(url, "_self", options);
    this.iab.create(url, options);
  }
}
