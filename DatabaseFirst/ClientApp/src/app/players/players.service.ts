import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player } from "./player";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private apiURL = "http://localhost:13164/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiURL = baseUrl;
  }

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.apiURL + 'api/players')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getPlayer(id: any): Observable<Player> {
    return this.httpClient.get<Player>(this.apiURL + 'api/players/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createPlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.apiURL + 'api/players/', JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updatePlayer(id: any, player: any): Observable<Player> {
    return this.httpClient.put<Player>(this.apiURL + 'api/players/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deletePlayer(id: any) {
    return this.httpClient.delete<Player>(this.apiURL + 'api/players/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error:any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
