import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component'

const routes: Routes = [
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  {path: 'tsm-dashboard', component: TsmDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
