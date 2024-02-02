import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "id.ac.stikombanyuwangi.sim",
  appName: "SINOTIF STIKOM",
  webDir: "www",
  server: {
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      // launchAutoHide: true,
      backgroundColor: "#ffffffff",
      // androidSplashResourceName: "splash",
      // androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      // spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    LocalNotifications: {
      smallIcon: "ic_bell",
      iconColor: "#FF7F50",
      sound: "sinotif.wav",
    },
  },
};

export default config;
