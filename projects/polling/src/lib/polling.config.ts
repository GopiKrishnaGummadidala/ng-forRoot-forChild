import { InjectionToken } from "@angular/core";

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>("interval");
