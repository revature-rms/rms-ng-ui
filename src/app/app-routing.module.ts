import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import {TsmDashboardComponent} from './tsm-dashboard/tsm-dashboard.component'



// Routes: Rename components as needed
const routes: Routes = [
  {path: '', redirectTo: '/tsm-dashboard', pathMatch: 'full'},
  {path: 'tsm-dashboard', component: TsmDashboardComponent},
<<<<<<< HEAD
  {path: 'tsm-employee-details', component: EmployeeDetailViewComponent}
=======
  // {path: 'admn-dashboard', component: AdmnDashboardComponent}, //admin dashboard
  // {path: 'bmngr-dashboard', component: BmngrDashboardComponent}, //building manager dashboard
  // {path: 'trnr-dashboard', component: TrnrDashboardComponent}, //trainer dashboard
  // {path: 'rooms', component: RoomDetailComponent},             //room detail
  // {path: 'buildings', component: BuildingDetailComponent},     //building detail
  // {path: 'users', component: UserDetailComponent},             //user detail
  // {path: 'employees', component: EmployeeDetailComponent},     //employee detail
  // {path: 'resources', component: ResourceDetailComponent},     //resource detail

>>>>>>> 5c969ae194911a0c324989edbf77309c8cf7c0ee
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
