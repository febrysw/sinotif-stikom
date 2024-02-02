import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { ActivatedRoute } from "@angular/router";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";

@Component({
  selector: "app-news-detail",
  templateUrl: "./news-detail.page.html",
  styleUrls: ["./news-detail.page.scss"],
})
export class NewsDetailPage implements OnInit {
  newsCollection = "news";
  news: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fs: AngularFirestore,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      // Access the route parameters here
      const newsId = params.get("newsId");
      console.log("News ID:", newsId);

      this.getNewsById(newsId);
    });
  }

  getNewsById(newsId: string) {
    this.fs
      .collection(this.newsCollection, (ref) =>
        ref.where("status", "==", "Published").orderBy("date", "desc").limit(3)
      )
      .doc(newsId)
      .valueChanges()
      .subscribe((data) => {
        this.news = data;
        console.log(data);
      });
  }

  goToLink(url: string) {
    const options =
      "cleardata=yes,clearcache=yes,hardwareback=no,location=yes,zoom=no,hideurlbar=yes,hidenavigationbuttons=yes,closebuttoncaption=Return to App";
    // this.iab.create(url, "_self", options);
    this.iab.create(url, options);
  }
}
