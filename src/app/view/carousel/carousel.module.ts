import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CarouselComponent} from "./carousel.component";

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }
