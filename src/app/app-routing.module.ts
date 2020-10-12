import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  {path: 'tsm-dashboard', component: TsmDashboardComponent} , 
  {path: 'building-details', component: BuildingDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
