import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from "./common.service";
import {Game} from "../../model/game";
import {GameDao} from "../dao/game-dao";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export const GAME_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class GameService extends CommonService<Game> implements GameDao {

  constructor(private http: HttpClient,
              @Inject(GAME_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl);
  }

  getPopular(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/popularGame');
  }

  getGameOfTheDay(): Observable<Game> {
    return this.http.get<Game>(this.baseUrl + '/gameOfTheDay');
  }

  getNew(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/newGame');
  }

  getSale(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/saleGame');
  }


}
