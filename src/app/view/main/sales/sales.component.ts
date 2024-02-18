import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  @ViewChild('sales', { static: true }) sales!: ElementRef;

  constructor(private elementRef: ElementRef) { }

  setHeight(height: number) {
    this.sales.nativeElement.style.height = height + 'px';
  }

  getHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
