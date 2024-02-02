import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  model = {
    title: "Profil Under Maintenance",
    subTitle: "",
    color: "primary",
    icon: "person-circle-outline",
  };
  responseData: any;
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit ProfilePage");
    this.responseData = false;
  }
}
