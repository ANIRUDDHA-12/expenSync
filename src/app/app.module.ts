import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAuthModule } from './employee-auth/employee-auth.module';
import { SharedModule } from './shared/shared.module';
import { ExpenseModule } from './expense/expense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeAuthModule,
    SharedModule,
    ExpenseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
