import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GradePageRoutingModule } from "./grade-routing.module";

import { GradePage } from "./grade.page";
import { EmptyComponent } from "../../components/empty/empty.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradePageRoutingModule,
    EmptyComponent,
  ],
  declarations: [GradePage],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GradePageModule {}
