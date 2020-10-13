import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';

import {MaterialModule} from './material-module';

import { TsmDashboardComponent } from './tsm-dashboard/tsm-dashboard.component';
import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import { CampusDetailViewComponent } from './campus-detail-view/campus-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailViewComponent,
    LoginComponent,
    TsmDashboardComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
