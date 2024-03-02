import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../../../data/impl/game.service";
import {Game} from "../../../model/game";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent implements OnInit{

  @ViewChild('sales', { static: true }) sales!: ElementRef;

  saleGames: Game[] = [];
  price1: number[] = [];
  price2: number[] = [];
  discountPrice1: number[] = [];
  discountPrice2: number[] = [];
  image: string[] = [];

  constructor(private elementRef: ElementRef,
              private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.gameService.getSale().subscribe(res => {
      this.saleGames = res;

      this.separatePrice(this.saleGames);
    })
  }

  private separatePrice(games: Game[]) {
    for (const game of games) {
      this.price1.push(Math.floor(game.price));
      this.price2.push(Math.round((game.price - Math.floor(game.price)) * 100));
      this.discountPrice1.push(Math.floor(game.priceWithDiscount!));
      this.discountPrice2.push(Math.round((game.priceWithDiscount! - Math.floor(game.priceWithDiscount!)) * 100));
    }
  }

  protected dataURI(bytes: string) {
    return 'data:image/jpeg;base64,' + bytes;
  }

  setHeight(height: number) {
    this.sales.nativeElement.style.height = height + 'px';
  }

  getHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }

}
