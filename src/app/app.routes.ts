import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {LayoutComponent} from "./view/layout/layout.component";
import {GameCardComponent} from "./view/game-card/game-card.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./view/layout/layout.module').then(x => x.LayoutModule)
      }]
  },
  {
    path: 'game',
    component: GameCardComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})

export class AppRoutesModule {

}
