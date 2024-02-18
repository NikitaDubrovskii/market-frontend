import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
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

}
