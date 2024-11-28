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
      map((response: { players: any; }) => response.players) // Extrae el array de la clave "players"
    );
  }
  /*
  getPlayer(id: number): Observable<Player[]> {
    return this.http.get<{ players: Player[] }>(`${this.myAppUrl}`).pipe(
      map((response: { players: any; }) => response.players) // Extrae el array de la clave "players"
    );
  }
  */
  createPlayer(player: Player): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}add`, player);
  }
  /*
  updatePlayer(id: number): Observable<Player[]> {
    return this.http.get<{ players: Player[] }>(`${this.myAppUrl}`).pipe(
      map((response: { players: any; }) => response.players) // Extrae el array de la clave "players"
    );
  }
  */
}
