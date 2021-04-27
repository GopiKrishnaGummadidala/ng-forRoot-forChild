import { PollingService } from "./polling.service";
import { NgModule } from "@angular/core";
import { PollingComponent } from "./polling.component";

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  providers: [PollingService],
  exports: [PollingComponent],
})
export class PollingModule {}
