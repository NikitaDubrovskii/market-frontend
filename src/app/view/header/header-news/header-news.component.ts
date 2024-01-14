import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-header-news',
  templateUrl: './header-news.component.html',
  styleUrl: './header-news.component.css',
})
export class HeaderNewsComponent implements OnInit {
  address1 = '123 Main Street, New York, NY 10001'
  address2 = 'Open: 9:00 AM - 8:00 PM, Monday to Saturday'
  showAddress1 = true;

  constructor() {
  }

  ngOnInit(): void {
    interval(5000).subscribe(() => {
      this.showAddress1 = !this.showAddress1;
    });
  }
}
