import { NgModule } from "@angular/core";

import { NpTimePickerDemoRoutingModule } from "./np-time-picker-demo-routing.module";
import { NpTimePickerDemoComponent } from "./np-time-picker-demo.component";
import { NpTimePickerModule, NpTabsModule, NpCardModule } from "np-ui-lib";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NpTimePickerDemoComponent],
  imports: [
    NpTimePickerModule,
    NpTimePickerDemoRoutingModule,
    CommonModule,
    FormsModule,
    NpTabsModule,
    NpCardModule,
  ],
})
export class NpTimePickerDemoModule {}
