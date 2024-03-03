import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {News} from "../../../model/news";
import {NewsService} from "../../../data/impl/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{

  @ViewChild('news', { static: true }) news!: ElementRef;

  allNews: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    this.newsService.getAll().subscribe(res => {
      this.allNews = res;
    })
  }

  setHeight(height: number) {
    this.news.nativeElement.style.height = height + 'px';
  }
}
