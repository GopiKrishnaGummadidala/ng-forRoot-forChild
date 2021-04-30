import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PollingModule } from "polling";
import { LazyComponent } from "./lazy.component";
import { LazyRoutingModule } from "./lazy.routing.module";

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    PollingModule.forChild({ interval: 3000 }),
  ],
})
export class LazyModule {}
