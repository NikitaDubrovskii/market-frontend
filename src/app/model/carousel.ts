export class Carousel {
  carouselId: number;
  imageBytes: string;
  imageName: string;
  title: string;
  text?: string;

  constructor(carouselId: number, imageBytes: string, imageName: string, title: string, text: string) {
    this.carouselId = carouselId;
    this.imageBytes = imageBytes;
    this.imageName = imageName;
    this.title = title;
    this.text = text;
  }
}
