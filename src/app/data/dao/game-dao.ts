import {Observable} from "rxjs";
import {Game} from "../../model/game";

export interface GameDao {

  getPopular(): Observable<Game[]>;

  getGameOfTheDay(): Observable<Game>;

  getNew(): Observable<Game[]>;

  getSale(): Observable<Game[]>;

}
