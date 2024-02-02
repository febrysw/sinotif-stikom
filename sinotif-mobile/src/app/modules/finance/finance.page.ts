import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.page.html",
  styleUrls: ["./finance.page.scss"],
})
export class FinancePage implements OnInit {
  model = {
    title: "Keuangan Under Maintenance",
    subTitle: "",
    color: "primary",
    icon: "wallet-outline",
  };
  responseData: any;
  constructor() {}

  ngOnInit() {
    console.log("ngOnInit FinancePage");
    this.responseData = false;
  }
}
