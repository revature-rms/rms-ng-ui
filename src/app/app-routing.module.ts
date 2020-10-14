import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';

import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';



// Routes: Rename components as needed
const routes: Routes = [
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  // {path: 'tsm-dashboard', component: TsmDashboardComponent} , 
  // {path: 'building-details', component: BuildingDetailsComponent} ,
  // {path: 'tsm-employee-details', component: EmployeeDetailViewComponent}
  // {path: 'admn-dashboard', component: AdmnDashboardComponent}, //admin dashboard
  // {path: 'bmngr-dashboard', component: BmngrDashboardComponent}, //building manager dashboard
  // {path: 'trnr-dashboard', component: TrnrDashboardComponent}, //trainer dashboard
  // {path: 'rooms', component: RoomDetailComponent},             //room detail
  // {path: 'buildings', component: BuildingDetailComponent},     //building detail
  // {path: 'users', component: UserDetailComponent},             //user detail
  // {path: 'employees', component: EmployeeDetailComponent},     //employee detail//named it differently. might have to refactor
  // {path: 'resources', component: ResourceDetailComponent},     //resource detail

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
