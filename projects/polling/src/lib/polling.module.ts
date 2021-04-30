import { INTERVAL, PollingConfig } from "./polling.config";
import { PollingService } from "./polling.service";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { PollingComponent } from "./polling.component";

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
})
export class PollingModule {
  static withConfig(config?: PollingConfig) {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config ? config.interval : 1000,
        },
      ],
    };
  }
}
