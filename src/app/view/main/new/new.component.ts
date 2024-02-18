import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  constructor(private elementRef: ElementRef) { }

  getHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
