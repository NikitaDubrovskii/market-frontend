import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LayoutRoutes} from "./layout.routes";
import {PesronComponent} from "../pesron/pesron.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
  ],
  declarations: [
    PesronComponent
  ]
})
export class LayoutModule {}
