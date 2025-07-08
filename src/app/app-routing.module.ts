import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEntryComponent } from './expense/new-entry/new-entry.component';

const routes: Routes = [
  {
    path:'new-entry',
    component:NewEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
