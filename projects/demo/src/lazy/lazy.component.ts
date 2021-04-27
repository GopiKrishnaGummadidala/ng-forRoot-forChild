import { PollingService } from "./../../../polling/src/lib/polling.service";
import { Component, OnInit } from "@angular/core";

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
