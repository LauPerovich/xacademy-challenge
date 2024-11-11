import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'players/';
  }

  getPlayersList(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
