import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component'

const routes: Routes = [
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  {path: 'tsm-dashboard', component: TsmDashboardComponent},
  {path: 'login', component: LoginComponent },
  {path: 'room-details', component: RoomDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
