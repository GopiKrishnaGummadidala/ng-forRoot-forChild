import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PollingModule } from "polling";
import { LazyComponent } from "./lazy.component";
import { LazyRoutingModule } from "./lazy.routing.module";

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
