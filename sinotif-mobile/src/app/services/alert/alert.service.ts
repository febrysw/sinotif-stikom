import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async openAlert(
    header: string,
    subHeader: string,
    message: string,
    cssClass?: string,
    buttons?: any
  ) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      cssClass: cssClass,
      buttons: buttons ? buttons : ["Ok"],
    });

    await alert.present();
  }
}
