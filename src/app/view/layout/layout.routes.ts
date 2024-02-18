import {Routes} from '@angular/router';
import {PesronComponent} from "../pesron/pesron.component";
import {GameCardComponent} from "../game-card/game-card.component";
import {MainComponent} from "../main/main.component";

export const LayoutRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'person', component: PesronComponent},
  {path: 'game2', component: GameCardComponent},
]

