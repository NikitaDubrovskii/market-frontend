import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {GameOfTheDayComponent} from "./game-of-the-day/game-of-the-day.component";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "../carousel/carousel.module";
import {SalesComponent} from "./sales/sales.component";
import {NewComponent} from "./new/new.component";
import {NewsComponent} from "./news/news.component";
import {PopularComponent} from "./popular/popular.component";
import {BrandsComponent} from "./brands/brands.component";


@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    GameOfTheDayComponent,
    SalesComponent,
    NewComponent,
    NewsComponent,
    PopularComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [MainComponent]
})
export class MainModule {
}
