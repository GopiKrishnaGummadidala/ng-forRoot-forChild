import { Component, OnInit } from "@angular/core";
import { PollingService } from "polling/polling";

@Component({
  selector: "app-home",
  template: `<p>
    Home Polling count times {{ pollingService.polling$ | async }}
  </p>`,
})
export class HomeComponent implements OnInit {
  constructor(private pollingService: PollingService) {}

  ngOnInit() {}
}
