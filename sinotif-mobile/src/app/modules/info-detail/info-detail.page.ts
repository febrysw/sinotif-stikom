import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { ActivatedRoute } from "@angular/router";
import { Share } from "@capacitor/share";

@Component({
  selector: "app-info-detail",
  templateUrl: "./info-detail.page.html",
  styleUrls: ["./info-detail.page.scss"],
})
export class InfoDetailPage implements OnInit {
  notifCollection = "notifications";
  notifs: any = [];
  images: string;
  defaultHref = "/app/tabs/info";

  constructor(
    private activatedRoute: ActivatedRoute,
    private fs: AngularFirestore
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const notifId = params.get("notifId");
      this.getNotifById(notifId);
    });
  }

  getNotifById(notifId: string) {
    this.fs
      .collection(this.notifCollection)
      .doc(notifId)
      .valueChanges()
      .subscribe((data) => {
        this.notifs = data;
        this.images = this.notifs.notification.image;
        // console.log(data);
      });
  }

  async share() {
    console.log(this.notifs.notification);

    const text =
      this.notifs.notification.title +
      "\n\nSilahkan buka melalui link berikut : " +
      this.notifs.notification.image;

    await Share.share({
      title: this.notifs.notification.title,
      text: text,
      // url: this.notifs.notification.image,
      dialogTitle: "Bagikan informasi ini",
    });
  }
}
