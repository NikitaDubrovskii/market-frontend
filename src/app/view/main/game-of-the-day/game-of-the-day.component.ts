import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../../../data/impl/game.service";
import {Game} from "../../../model/game";

@Component({
  selector: 'app-game-of-the-day',
  templateUrl: './game-of-the-day.component.html',
  styleUrl: './game-of-the-day.component.css'
})
export class GameOfTheDayComponent implements OnInit{

  @ViewChild('gameOfTheDay', { static: true }) gameOfTheDay!: ElementRef;

  game!: Game;
  price1: number = 0;
  price2: number = 0;
  discountPrice1: number = 0;
  discountPrice2: number = 0;

  constructor(private elementRef: ElementRef,
              private gameService: GameService) {}

  ngOnInit(): void {
    this.getGameOfTheDay();
  }

  private getGameOfTheDay() {
    this.gameService.getGameOfTheDay().subscribe(res => {
      this.game = res;
      this.separatePrice(res)
    })
  }

  private separatePrice(game: Game) {
    this.price1 = Math.floor(game.price);
    this.price2 = Math.round((game.price - Math.floor(game.price)) * 100);
    this.discountPrice1 = Math.floor(game.priceWithDiscount!);
    this.discountPrice2 = Math.round((game.priceWithDiscount! - Math.floor(game.priceWithDiscount!)) * 100);
  }

  protected dataURI(bytes: string) {
    return 'data:image/jpeg;base64,' + bytes;
  }

  setHeight(height: number) {
    this.gameOfTheDay.nativeElement.style.height = height + 'px';
  }

  getHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }

}
