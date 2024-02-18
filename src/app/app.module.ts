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

@NgModule({
  imports: [
    RouterModule,
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

  providers: [],

  bootstrap: [AppComponent],

  exports: [AppComponent]
})
export class AppModule {
}
