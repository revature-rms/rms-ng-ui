import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';

import {MaterialModule} from './material-module';

import { TsmDashboardComponent } from './tsm-dashboard/tsm-dashboard.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import { CampusDetailViewComponent } from './campus-detail-view/campus-detail-view.component';
import { RoomEditComponent } from './room-edit/room-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailViewComponent,
    LoginComponent,
    TsmDashboardComponent,
    RoomDetailsComponent,
    RoomEditComponent,
    NavbarComponent,
    CampusDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
