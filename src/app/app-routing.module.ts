import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './employee-auth/register/register.component';
import { LoginComponent } from './employee-auth/login/login.component';
import { NewEntryComponent } from './expense/new-entry/new-entry.component';
import { HistoryComponent } from './expense/history/history.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ManagerComponent } from './dashboard/manager/manager.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-entry',
    component: NewEntryComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
