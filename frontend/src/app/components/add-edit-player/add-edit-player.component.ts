import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Player } from '../../interfaces/player';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../../services/players.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-player',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-edit-player.component.html',
  styleUrl: './add-edit-player.component.css'
})
export class AddEditPlayerComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb:FormBuilder, 
    private _playersService: PlayersService,
    private router: Router,
    private aRoute: ActivatedRoute, 
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      long_name: ["", Validators.required],
      player_positions: ["", Validators.required],
      club_name: [""],
      nationality_name: [""],
      age: [null, [Validators.min(1), Validators.max(120), Validators.required]],
      height_cm: [null, [Validators.min(1), Validators.max(270)]],
      weight_kg: [null, [Validators.min(1), Validators.max(200)]],
      pace: [null, [Validators.min(1), Validators.max(100)]],
      shooting: [null, [Validators.min(1), Validators.max(100)]],
      passing: [null, [Validators.min(1), Validators.max(100)]],
      dribbling: [null, [Validators.min(1), Validators.max(100)]],
      defending: [null, [Validators.min(1), Validators.max(100)]],
      physic: [null, [Validators.min(1), Validators.max(100)]],
    })
    this.id = Number(aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    if(this.id != 0) {
      this.operacion = 'Editar ';
      this.getPlayer(this.id);
      // this.updatePlayer(this.id);
    }
  }

  createPlayer() {
    const player: Player = {
    long_name: this.form.value.long_name,
    player_positions: this.form.value.player_positions,
    club_name: this.form.value.club_name,
    nationality_name:this.form.value.nationality_name,
    age:this.form.value.age, 
    height_cm: this.form.value.height_cm,
    weight_kg:this.form.value.weight_kg,
    pace: this.form.value.pace,
    shooting: this.form.value.shooting,
    passing: this.form.value.passing,
    dribbling: this.form.value.dribbling,
    defending: this.form.value.defending,
    physic: this.form.value.physic
    }

    if (this.id !== 0) {
      // Editar productos
      player.id = this.id;
      this._playersService.updatePlayer(this.id, player).subscribe(() => {
        this.toastr.success(`La jugadora ${player.long_name} fue actualizada`, 'Jugadora actualizada');
        this.router.navigate(['/players']);
      })} else {
      // Agregar producto
      this._playersService.createPlayer(player).subscribe(() => {
        this.toastr.success(`La jugadora ${player.long_name} fue agregada`, 'Jugadora agregada');
        this.router.navigate(['/players']);
      })
    }
  }

  getPlayer(id: number) {
    this._playersService.getPlayer(id).subscribe((data: Player) => {
      console.log(data);
      this.form.setValue({
        long_name: data.long_name,
        player_positions: data.player_positions,
        club_name: data.club_name,
        nationality_name:data.nationality_name,
        age:data.age, 
        height_cm: data.height_cm,
        weight_kg:data.weight_kg,
        pace: data.pace,
        shooting: data.shooting,
        passing: data.passing,
        dribbling: data.dribbling,
        defending: data.defending,
        physic: data.physic
      });
    });
  };
}
