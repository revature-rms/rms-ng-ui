import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';
import { BuildingEditComponent } from './building-edit/building-edit.component';

import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component';

import {CampusDetailViewComponent} from './campus-detail-view/campus-detail-view.component';



// Routes: Rename components as needed
const routes: Routes = [
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  {path: 'tsm-dashboard', component: TsmDashboardComponent},
  {path: 'building-details/:id', component: BuildingDetailsComponent} ,
  {path: 'building-edit/:id', component: BuildingEditComponent},
  {path: 'login', component: LoginComponent },
  {path: 'room-details/:id', component: RoomDetailsComponent},
  {path: 'room-edit/:id', component: RoomEditComponent},
  {path: 'employee-details/:id', component: EmployeeDetailViewComponent},
  {path: 'campus-details/:id', component:CampusDetailViewComponent},
  {path: '**', redirectTo: '/tsm-dashboard', pathMatch: 'full'}
  // {path: 'admn-dashboard', component: AdmnDashboardComponent}, //admin dashboard
  // {path: 'bmngr-dashboard', component: BmngrDashboardComponent}, //building manager dashboard
  // {path: 'trnr-dashboard', component: TrnrDashboardComponent}, //trainer dashboard
  // {path: 'rooms', component: RoomDetailComponent},             //room detail
  // {path: 'buildings', component: BuildingDetailComponent},     //building detail
  // {path: 'users', component: UserDetailComponent},             //user detail
  // {path: 'resources', component: ResourceDetailComponent},     //resource detail

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
