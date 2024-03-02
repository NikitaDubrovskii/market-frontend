import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from "./common.service";
import {HttpClient} from "@angular/common/http";
import {CategoryDao} from "../dao/category-dao";
import {Category} from "../../model/category";

export const CATEGORY_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CommonService<Category> implements CategoryDao {

  constructor(private http: HttpClient,
              @Inject(CATEGORY_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl);
  }
}
