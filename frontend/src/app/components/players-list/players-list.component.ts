import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayersService } from '../../services/players.service';


@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent implements OnInit {
  playersList: Player[] = [
    { id: 1, long_name: 'Laura Perovich', player_positions: 'CM', club_name: 'Arsenal', nationality_name: 'Arg', age: 29, height_cm: 167, weight_kg: 70, pace: 87, shooting: 90, passing: 98, dribbling: 90, defending: 90, physic: 95 },
    { id: 2, player_face_url: "player photo", long_name: 'Dan Martinez', player_positions: 'AT', club_name: 'Barcelona', nationality_name: 'Arg', age: 25, height_cm: 170, weight_kg: 70, pace: 87, shooting: 90, passing: 98, dribbling: 90, defending: 90, physic: 95 }
  ]

  constructor(private _playersService: PlayersService) {

  }

  ngOnInit(): void {
    this.getPlayersList();
  }

  getPlayersList() {
    this._playersService.getPlayersList().subscribe((data) => {
      console.log(data);
    })
  }
}
