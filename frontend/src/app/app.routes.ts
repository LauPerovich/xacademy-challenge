import { Routes } from '@angular/router';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { AddEditPlayerComponent } from './components/add-edit-player/add-edit-player.component';

export const routes: Routes = [
    { path: '', component: PlayersListComponent },
    // { path: '/:id', component: PlayersListComponent },
    { path: 'players/add', component: AddEditPlayerComponent },
    { path: 'players/edit/:id', component: AddEditPlayerComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
