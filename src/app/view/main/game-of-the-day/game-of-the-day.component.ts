import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-game-of-the-day',
  templateUrl: './game-of-the-day.component.html',
  styleUrl: './game-of-the-day.component.css'
})
export class GameOfTheDayComponent {
  @ViewChild('gameOfTheDay', { static: true }) gameOfTheDay!: ElementRef;

  constructor(private elementRef: ElementRef) { }

  setHeight(height: number) {
    this.gameOfTheDay.nativeElement.style.height = height + 'px';
  }

  getHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
