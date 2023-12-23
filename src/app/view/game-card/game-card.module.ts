import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {GameCardComponent} from "./game-card.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],

  declarations: [GameCardComponent],

  exports: [GameCardComponent]
})
export class GameCardModule {
}
