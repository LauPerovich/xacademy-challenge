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
  playersList: Player[] = []

  constructor(private _playersService: PlayersService) {

  }

  ngOnInit(): void {
    this.getPlayersList();
  }

  getPlayersList() {
    this._playersService.getPlayersList().subscribe((data: Player[]) => {
      this.playersList = data;
    })
  }

  // deletePlayer(id: number) {
  //   this._playersService.deletePlayer(id).subscribe(data => {
  //    this.getPlayersList();
  //    this.toastr.warning('Jugadora eliminada con éxtio', 'Jugadora Eliminada');
  //   })
  // }
}
