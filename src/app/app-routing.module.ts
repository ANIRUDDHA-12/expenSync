import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAuthModule } from './employee-auth/employee-auth.module';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ManagerComponent } from './dashboard/manager/manager.component';

const routes: Routes = [
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
