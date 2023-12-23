import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {LayoutComponent} from "./view/layout/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./view/layout/layout.module').then(x => x.LayoutModule)
      }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [

  ],
})

export class AppRoutesModule {

}
