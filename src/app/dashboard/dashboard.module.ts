import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    ManagerComponent,
    EmployeeComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
