import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grade",
  templateUrl: "./grade.page.html",
  styleUrls: ["./grade.page.scss"],
})
export class GradePage implements OnInit {
  model = {
    title: "Nilai Under Maintenance",
    subTitle: "",
    color: "primary",
    icon: "school-outline",
  };
  responseData: any;
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit GradePage");
    this.responseData = false;
  }
}
