import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProfilePageRoutingModule } from "./profile-routing.module";

import { ProfilePage } from "./profile.page";
import { EmptyComponent } from "../../components/empty/empty.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    EmptyComponent,
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
