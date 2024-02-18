import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @ViewChild('news', { static: true }) news!: ElementRef;

  constructor() { }

  setHeight(height: number) {
    this.news.nativeElement.style.height = height + 'px';
  }
}
