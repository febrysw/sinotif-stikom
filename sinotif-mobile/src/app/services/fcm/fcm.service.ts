import { Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import {
  ActionPerformed,
  PushNotifications,
  PushNotificationSchema,
  Token,
} from "@capacitor/push-notifications";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "../storage/storage.service";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { FCM } from "@capacitor-community/fcm";
import {
  ActionPerformed as LocalActionPerformed,
  LocalNotifications,
  LocalNotificationSchema,
  ScheduleOptions,
} from "@capacitor/local-notifications";

export const FCM_TOKEN = "push_notification_token";

@Injectable({
  providedIn: "root",
})
export class FcmService {
  private _redirect = new BehaviorSubject<any>(null);

  get redirect() {
    return this._redirect.asObservable();
  }

  constructor(
    private storage: StorageService,
    private inAppBrowser: InAppBrowser,
    private router: Router,
    private alertController: AlertController
  ) {}

  initPush() {
    console.log(Capacitor.getPlatform());
    if (Capacitor.getPlatform() !== "web") {
      this.registerPush();
      // this.localPush();
      // this.getDeliveredNotifications();
    }
  }

  private async registerPush() {
    try {
      // await PushNotifications.removeAllDeliveredNotifications();
      await this.addListeners();
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === "prompt") {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== "granted") {
        throw new Error("User denied permissions!");
      }

      await PushNotifications.register();
      this.subscribeToTopic();
    } catch (e) {
      console.log(e);
    }
  }

  async getDeliveredNotifications() {
    const notificationList =
      await PushNotifications.getDeliveredNotifications();
    console.log("delivered notifications", notificationList);
  }

  async addListeners() {
    PushNotifications.addListener("registration", async (token: Token) => {
      console.log("My token: ", token);
      const fcm_token = token?.value;
      this.storage.setStorage(FCM_TOKEN, JSON.stringify(fcm_token));
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      console.log("Error: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      async (notification: PushNotificationSchema) => {
        console.log("Push received: " + JSON.stringify(notification));
        // const data = notification?.data;

        // this.openAlert(
        //   notification.title,
        //   notification.body,
        //   "",
        //   data?.type,
        //   data?.link
        // );

        // if (data?.local === "ya") {
        // this.getNotif(notification);
        // }
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      async (notification: ActionPerformed) => {
        console.log(
          "pushNotificationActionPerformed: ",
          JSON.stringify(notification)
        );
        const message = notification.notification;
        console.log("Action performed: " + JSON.stringify(message));

        if (message.data.type === "internal") {
          this.router.navigateByUrl(message.data.link);
        } else {
          this.openAlert(
            message.title,
            message.body,
            "",
            message.data.type,
            message.data.link
          );
        }

        // if (message.data?.local === "ya") {
        // this.getNotif(message);
        // }
      }
    );
  }

  async removeFcmToken() {
    try {
      const saved_token = JSON.parse(
        (await this.storage.getStorage(FCM_TOKEN)).value
      );
      this.storage.removeStorage(saved_token);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async openAlert(
    header: string,
    message: string,
    subHeader?: string,
    type?: string,
    link?: string,
    buttons?: any
  ) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: buttons
        ? buttons
        : [
            {
              text: "Tutup",
              role: "cancel",
              cssClass: "primary",
            },
            {
              text: "Buka",
              handler: () => {
                console.log("Ok clicked");

                if (type === "internal") {
                  this.router.navigateByUrl(link);
                } else if (type === "external") {
                  this.openBrowser(link, "_system");
                } else {
                  this.openBrowser(link, "_blank");
                }
              },
            },
          ],
    });

    await alert.present();
  }

  openBrowser(link: string, target: string) {
    const options =
      "cleardata=yes,clearcache=yes,hardwareback=no,location=yes,zoom=no,hideurlbar=yes,hidenavigationbuttons=yes,closebuttoncaption=Return to App,closebuttoncolor=#654ea3";
    const browser = this.inAppBrowser.create(link, target, options);
  }

  subscribeToTopic() {
    FCM.subscribeTo({ topic: "e-sim" })
      .then((r) => console.log("subscribed", r))
      .catch((err) => console.log(err));
  }

  async localPush() {
    try {
      // await LocalNotifications.removeAllDeliveredNotifications();
      await LocalNotifications.requestPermissions();

      LocalNotifications.registerActionTypes({
        types: [
          {
            id: "CHAT",
            actions: [
              {
                id: "view",
                title: "Open",
              },
              {
                id: "remove",
                title: "Dismiss",
              },
              {
                id: "respond",
                title: "Respond",
                input: true,
              },
            ],
          },
        ],
      });

      LocalNotifications.addListener(
        "localNotificationReceived",
        (notification: LocalNotificationSchema) => {
          console.log("localNotificationReceived: ", notification);
          // this.openAlert(notification.title, notification.body);
        }
      );

      LocalNotifications.addListener(
        "localNotificationActionPerformed",
        (notificationAction: LocalActionPerformed) => {
          console.log("localNotificationActionPerformed: ", notificationAction);

          const extra = notificationAction.notification.extra;

          if (notificationAction.actionId == "view") {
            if (extra.data.type === "internal") {
              this.router.navigateByUrl(extra.data.link);
            } else if (extra.data.type === "external") {
              this.openBrowser(extra.data.link, "_system");
            } else {
              this.openBrowser(extra.data.link, "_blank");
            }
          } else if (notificationAction.actionId == "respond") {
            this.showAlert(
              notificationAction.actionId,
              notificationAction.inputValue
            );
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
    });

    await alert.present();
  }

  generateRandomNumberBasedOnTime(): number {
    const timestamp: number = Date.now();
    const randomBasedOnTime: number = timestamp % 1000000;
    return randomBasedOnTime;
  }

  async getNotif(datax) {
    console.log("getNotif", datax);
    console.log(this.generateRandomNumberBasedOnTime());

    let options: ScheduleOptions = {
      notifications: [
        {
          id: this.generateRandomNumberBasedOnTime(),
          title: datax.data.title,
          body: datax.data.body,
          // largeBody: "Larger Body",
          // summaryText: "Summary",
          smallIcon: "res://drawable/ic_bell",
          largeIcon: "res://drawable/ic_bell",
          iconColor: "#802b5a",
          actionTypeId: "CHAT",
          extra: datax,
          // attachments: [
          //   {
          //     id: "face",
          //     url: "res://public/assets/logo.png",
          //   },
          // ],
        },
      ],
    };

    try {
      // await LocalNotifications.removeAllDeliveredNotifications();
      await LocalNotifications.schedule(options);
      console.log("getNotif sukses");
    } catch (error) {
      console.log("getNotif error", error);
      alert(JSON.stringify(error));
    }
  }
}
