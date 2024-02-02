import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from "@angular/router";

import { PushNotifications } from "@capacitor/push-notifications";
import { AlertService } from "../../services/alert/alert.service";
import { App } from "@capacitor/app";
import { NativeSettings, AndroidSettings } from "capacitor-native-settings";
import { Capacitor } from "@capacitor/core";

export const notifGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return new Promise(async (resolve, reject) => {
    const alert = inject(AlertService);

    if (Capacitor.getPlatform() !== "web") {
      let permStatus = await PushNotifications.checkPermissions();
      console.log("permStatus notifGuard: ", permStatus);

      if (permStatus.receive !== "granted") {
        const header = "Warning";
        const subHeader = "Akses Izin Ditolak";
        const message =
          "Aplikasi ini memerlukan akses izin notifikasi anda. Aktifkan?";
        const buttons = [
          {
            text: "Tidak",
            handler: () => {
              reject();
              App.exitApp();
            },
          },
          {
            text: "Ya, aktifkan",
            role: "submit",
            handler: async () => {
              NativeSettings.openAndroid({
                option: AndroidSettings.ApplicationDetails,
              });
            },
          },
        ];

        alert.openAlert(header, subHeader, message, "", buttons);
      }
    }

    resolve(true);
  });
};
