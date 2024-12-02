import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private myAppUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:3000/players/';
  }

  getPlayersList(): Observable<Player[]> {
    return this.http.get<{ players: Player[] }>(`${this.myAppUrl}`).pipe(
      map((response: { players: any; }) => response.players)
    );
  }
  
  createPlayer(player: Player): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}add`, player);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.myAppUrl}${id}`);
  }

  updatePlayer(id: number, player: Player): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}edit/${id}`, player);
  }

  // deletePlayer(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.myAppUrl}delete/${id}`);
  // }
}
