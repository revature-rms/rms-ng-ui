import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailViewComponent } from './employee-detail-view/employee-detail-view.component';
import { HttpClientModule }    from '@angular/common/http';

import { TsmDashboardComponent } from './tsm-dashboard/tsm-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailViewComponent,
    TsmDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
