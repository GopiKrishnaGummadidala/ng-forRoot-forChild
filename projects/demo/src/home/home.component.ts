import { Component, OnInit } from "@angular/core";
import { PollingService } from "polling/polling";

@Component({
  selector: "app-home",
  template: `<span>
    Home Polling count times {{ pollingService.polling$ | async }}
  </span>`,
})
export class HomeComponent implements OnInit {
  constructor(private pollingService: PollingService) {}

  ngOnInit() {}
}
