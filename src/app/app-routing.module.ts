import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component'
import {CampusDetailViewComponent} from './campus-detail-view/campus-detail-view.component';



// Routes: Rename components as needed
const routes: Routes = [
  {path: 'tsm-dashboard', component: TsmDashboardComponent},
  {path: 'login', component: LoginComponent },
  {path: 'room-details', component: RoomDetailsComponent},
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  {path: 'tsm-dashboard', component: TsmDashboardComponent},
  {path: 'tsm-employee-details', component: EmployeeDetailViewComponent},
  {path: 'campuses', component:CampusDetailViewComponent}
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
