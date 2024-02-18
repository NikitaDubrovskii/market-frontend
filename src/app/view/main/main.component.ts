import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GameOfTheDayComponent} from "./game-of-the-day/game-of-the-day.component";
import {SalesComponent} from "./sales/sales.component";
import {NewComponent} from "./new/new.component";
import {NewsComponent} from "./news/news.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(GameOfTheDayComponent) gameOfTheDay!: GameOfTheDayComponent;
  @ViewChild(SalesComponent) sales!: SalesComponent;
  @ViewChild(NewComponent) new!: NewComponent;
  @ViewChild(NewsComponent) news!: NewsComponent;


  constructor() {

  }

  ngAfterViewInit(): void {
    if (window.innerWidth >= 992) {
      this.setHeightBetweenFirstAndSecondComponent();
      this.setHeightBetweenThirdAndFourthComponent();
    } else if (window.innerWidth >= 768) {
      this.setHeightBetweenFirstAndFourthComponent();
    }
  }

  ngOnInit() {
  }

  // between gameOfTheDay and sales
  private setHeightBetweenFirstAndSecondComponent() {
    const salesHeight = this.sales.getHeight();
    const gameOfTheDayHeight = this.gameOfTheDay.getHeight();
    if (gameOfTheDayHeight > salesHeight) {
      this.setSalesHeight(gameOfTheDayHeight);
    } else {
      this.setGameOfTheDayHeight(salesHeight);
    }
  }

  // between new and news
  private setHeightBetweenThirdAndFourthComponent() {
    const newHeight = this.new.getHeight();
    this.setNewsHeight(newHeight);
  }

  // between gameOfTheDay and news
  private setHeightBetweenFirstAndFourthComponent() {
    const gameOfTheDayHeight = this.gameOfTheDay.getHeight();
    this.news.setHeight(gameOfTheDayHeight);
  }

  private setNewsHeight(height: number) {
    this.news.setHeight(height);
  }

  private setGameOfTheDayHeight(height: number) {
    this.gameOfTheDay.setHeight(height);
  }

  private setSalesHeight(height: number) {
    this.sales.setHeight(height);
  }

}
