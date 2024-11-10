import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-add-edit-player',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-edit-player.component.html',
  styleUrl: './add-edit-player.component.css'
})
export class AddEditPlayerComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder) {
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
  }

  addProduct() {
    const player: Player = {

    }

  }
}
