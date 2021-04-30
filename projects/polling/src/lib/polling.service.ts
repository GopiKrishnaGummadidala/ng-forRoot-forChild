import { Inject, Injectable, Optional } from "@angular/core";
import { timer } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { INTERVAL } from "./polling.config";

@Injectable()
export class PollingService {
  public polling$ = timer(0, this.interval || 1000).pipe(shareReplay());
  constructor(@Optional() @Inject(INTERVAL) private interval: number) {}
}
