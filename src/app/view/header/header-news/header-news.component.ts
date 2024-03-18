import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {ShopService} from "../../../data/impl/shop.service";
import {Shop} from "../../../model/shop";

@Component({
  selector: 'app-header-news',
  templateUrl: './header-news.component.html',
  styleUrl: './header-news.component.css',
})
export class HeaderNewsComponent implements OnInit {
  showAddress1 = true;
  shops: Shop[] = [];

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getShop();
    interval(5000).subscribe(() => {
      this.showAddress1 = !this.showAddress1;
    });
  }

  private getShop() {
    this.shopService.getAll().subscribe(res => {
      this.shops = res;
    })
  }
}
