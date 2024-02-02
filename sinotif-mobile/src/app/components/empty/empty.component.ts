import { Component, Input, OnInit } from "@angular/core";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { school } from "ionicons/icons";

@Component({
  selector: "app-empty",
  templateUrl: "./empty.component.html",
  styleUrls: ["./empty.component.scss"],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonIcon, IonLabel],
})
export class EmptyComponent implements OnInit {
  @Input() model: any;

  constructor() {
    addIcons({ school });
  }

  ngOnInit() {
    console.log("ngOnInit EmptyComponent");
  }
}
