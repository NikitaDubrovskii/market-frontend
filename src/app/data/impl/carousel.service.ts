import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from "./common.service";
import {Carousel} from "../../model/carousel";
import {HttpClient} from "@angular/common/http";

export const CAROUSEL_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class CarouselService extends CommonService<Carousel>{

  constructor(private http: HttpClient,
              @Inject(CAROUSEL_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl);
  }


}
