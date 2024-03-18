import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./common.service";
import {Shop} from "../../model/shop";

export const SHOP_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class ShopService extends CommonService<Shop> {

  constructor(private http: HttpClient,
              @Inject(SHOP_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl);
  }

}
