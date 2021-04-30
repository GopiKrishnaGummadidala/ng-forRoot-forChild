import { PollingService } from "./polling.service";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { PollingComponent } from "./polling.component";

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
})
export class PollingModule {
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [PollingService],
    };
  }
}
