import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeeComponent,
    ManagerComponent,
    EmployeeComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
