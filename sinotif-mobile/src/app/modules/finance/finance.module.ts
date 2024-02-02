import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FinancePageRoutingModule } from "./finance-routing.module";

import { FinancePage } from "./finance.page";
import { EmptyComponent } from "../../components/empty/empty.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancePageRoutingModule,
    EmptyComponent,
  ],
  declarations: [FinancePage],
})
export class FinancePageModule {}
