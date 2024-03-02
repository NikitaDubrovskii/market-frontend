import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {LayoutComponent} from "./view/layout/layout.component";
import {RouterModule} from "@angular/router";
import {AppRoutesModule} from "./app.routes";
import {HeaderModule} from "./view/header/header.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterModule} from "./view/footer/footer.module";
import {MainModule} from "./view/main/main.module";
import {GAME_URL_TOKEN} from "./data/impl/game.service";
import {CATEGORY_URL_TOKEN} from "./data/impl/category.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    AppRoutesModule,
    HeaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    FooterModule,
    MainModule
  ],

  declarations: [
    AppComponent,
    LayoutComponent
  ],

  providers: [
    {
      provide: GAME_URL_TOKEN,
      useValue: 'http://localhost:8080/game'
    },
    {
      provide: CATEGORY_URL_TOKEN,
      useValue: 'http://localhost:8080/category'
    }
  ],

  bootstrap: [AppComponent],

  exports: [AppComponent]
})
export class AppModule {
}
