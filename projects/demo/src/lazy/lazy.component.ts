import { Component, OnInit } from "@angular/core";
import { PollingService } from "polling/polling";

@Component({
  selector: "app-lazy",
  template: `<p>
    Lazy Polling count times {{ pollingService.polling$ | async }}
  </p>`,
})
export class LazyComponent implements OnInit {
  constructor(private pollingService: PollingService) {}

  ngOnInit() {}
}
