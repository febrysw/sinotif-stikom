import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { IonicModule } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { LOCALE_ID } from "@angular/core";

import localeId from "@angular/common/locales/id";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeId);

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, { provide: LOCALE_ID, useValue: "id-ID" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
