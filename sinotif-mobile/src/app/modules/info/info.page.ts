import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IonicSlides, ModalController } from "@ionic/angular";
import { InfoSearchComponent } from "../../components/info-search/info-search.component";

@Component({
  selector: "app-info",
  templateUrl: "./info.page.html",
  styleUrls: ["./info.page.scss"],
})
export class InfoPage implements OnInit {
  swiperModules = [IonicSlides];
  popular: any[] = [];
  recent: any[] = [];
  collections = "notifications";

  constructor(
    private fs: AngularFirestore,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.fs
      .collection(this.collections, (ref) =>
        ref.where("status", "==", "Featured").orderBy("date", "desc").limit(3)
      )
      .snapshotChanges()
      .subscribe((data) => {
        this.popular = [];

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

          this.popular.push(notif);
        });

        console.log(this.popular);
      });

    this.fs
      .collection(this.collections, (ref) =>
        ref.where("status", "==", "Published").orderBy("date", "desc").limit(5)
      )
      .snapshotChanges()
      .subscribe((data) => {
        this.recent = [];

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

          this.recent.push(notif);
        });

        console.log(this.recent);
      });
  }

  async openSearch(status: string) {
    console.log(status);
    const modal = await this.modalCtrl.create({
      component: InfoSearchComponent,
      componentProps: {
        status: status,
      },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log("data =>", data);
    // if (data) {
    //   this.filter = data;
    // }
  }
}
