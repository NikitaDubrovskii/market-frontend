import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Carousel} from "../../model/carousel";
import {CarouselService} from "../../data/impl/carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, AfterViewInit {

  slides: Carousel[] = [];

  constructor(private carouselService: CarouselService) {
  }

  ngOnInit(): void {
    this.getSlides();
  }

  ngAfterViewInit(): void {
    this.initCarousel();
  }

  private initCarousel() {
    // @ts-ignore
    const myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'),{
      interval: 5000
    });
  }

  private getSlides() {
    this.carouselService.getAll().subscribe(res => {
      this.slides = res;
    })
  }

  protected dataURI(bytes: string) {
    return 'data:image/jpeg;base64,' + bytes;
  }

}
