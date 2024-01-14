import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HeaderNewsComponent} from "./header-news/header-news.component";
import {HeaderTitleComponent} from "./header-title/header-title.component";
import {HeaderMenuComponent} from "./header-menu/header-menu.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],

  declarations: [
    HeaderComponent,
    HeaderNewsComponent,
    HeaderTitleComponent,
    HeaderMenuComponent,
  ],

  exports: [HeaderComponent]
})
export class HeaderModule {
}
