import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-alert-demo",
  templateUrl: "./np-alert-demo.component.html",
})
export class NpAlertDemoComponent implements OnInit {
  importText = "import { NpAlertModule } from 'np-ui-lib';";
  htmlText = `<np-alert type="success" showCloseButton="true">
  Hi this is success alert message.
</np-alert>`;

  constructor() {}

  ngOnInit(): void {}
}
