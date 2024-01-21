import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {LayoutComponent} from "./view/layout/layout.component";
import {RouterModule} from "@angular/router";
import {AppRoutesModule} from "./app.routes";
import {HeaderModule} from "./view/header/header.module";
import {GameCardModule} from "./view/game-card/game-card.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from "./view/carousel/carousel.module";

@NgModule({
  imports: [
    RouterModule,
    AppRoutesModule,
    HeaderModule,
    GameCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],

  declarations: [
    AppComponent,
    LayoutComponent
  ],

  providers: [],

  bootstrap: [AppComponent],

  exports: [AppComponent]
})
export class AppModule {
}
