import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewEntryComponent } from './expense/new-entry/new-entry.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ManagerComponent } from './dashboard/manager/manager.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'new-entry',
    component: NewEntryComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
