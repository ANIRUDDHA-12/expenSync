import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { HistoryComponent } from './history/history.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';



@NgModule({
  declarations: [
    NewEntryComponent,
    HistoryComponent,
    PendingRequestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpenseModule { }
