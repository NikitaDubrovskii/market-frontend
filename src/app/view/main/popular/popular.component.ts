import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GameService} from "../../../data/impl/game.service";
import {Game} from '../../../model/game';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit, AfterViewInit {

  popularGames: Game[] = [];
  price1: number[] = [];
  price2: number[] = [];
  image: string[] = [];

  constructor(private gameService: GameService) {

  }

  ngOnInit(): void {
    this.getGames();
  }

  ngAfterViewInit(): void {
  }

  private getGames() {
    this.gameService.getPopular().subscribe(res => {
      this.popularGames = res;
      this.separatePrice(this.popularGames);
    });
  }

  private separatePrice(games: Game[]) {
    for (const game of games) {
      this.price1.push(Math.floor(game.price));
      this.price2.push(Math.round((game.price - Math.floor(game.price)) * 100));
    }
  }

  protected dataURI(bytes: string) {
    return 'data:image/jpeg;base64,' + bytes;
  }

}
