import {Component, ElementRef, OnInit} from '@angular/core';
import {Game} from "../../../model/game";
import {GameService} from "../../../data/impl/game.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit{

  newGames: Game[] = [];
  price1: number[] = [];
  price2: number[] = [];
  image: string[] = [];

  constructor(private elementRef: ElementRef,
              private gameService: GameService) { }

  ngOnInit(): void {
    this.getNewGame();
  }

  private getNewGame() {
    this.gameService.getNew().subscribe(res => {
      this.newGames = res;
      this.separatePrice(this.newGames);
    })
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

  getHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
