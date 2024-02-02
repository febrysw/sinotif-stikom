import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InfoPageRoutingModule } from "./info-routing.module";

import { InfoPage } from "./info.page";
import { JobComponent } from "../../components/job/job.component";
import { InfoSearchComponent } from "../../components/info-search/info-search.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule,
    JobComponent,
    InfoSearchComponent,
  ],
  declarations: [InfoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InfoPageModule {}
