import { Component, OnInit } from "@angular/core";
import { PollingService } from "polling/polling";

@Component({
  selector: "app-lazy",
  template: `<span>
    Lazy Polling count times {{ pollingService.polling$ | async }}
  </span>`,
})
export class LazyComponent implements OnInit {
  constructor(private pollingService: PollingService) {}

  ngOnInit() {}
}
