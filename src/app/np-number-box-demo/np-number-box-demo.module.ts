import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NpNumberBoxDemoRoutingModule } from "./np-number-box-demo-routing.module";
import { NpNumberBoxDemoComponent } from "./np-number-box-demo.component";
import {
  NpNumberBoxModule,
  NpTabsModule,
  NpCardModule,
  NpAlertModule,
} from "np-ui-lib";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NpNumberBoxDemoComponent],
  imports: [
    CommonModule,
    NpNumberBoxDemoRoutingModule,
    NpNumberBoxModule,
    FormsModule,
    NpTabsModule,
    NpCardModule,
    NpAlertModule,
  ],
})
export class NpNumberBoxDemoModule {}
