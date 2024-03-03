import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from "./common.service";
import {News} from "../../model/news";
import {NewsDao} from "../dao/news-dao";
import {HttpClient} from "@angular/common/http";

export const NEWS_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class NewsService extends CommonService<News> implements NewsDao {

  constructor(private http: HttpClient,
              @Inject(NEWS_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl);
  }


}
