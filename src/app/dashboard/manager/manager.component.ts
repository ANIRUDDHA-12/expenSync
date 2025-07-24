import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private database:DatabaseService){}

  requests = this.database.Expense.filter((elem)=>elem.status=="pending")

  setStatusToAccept(id:any){
    let expenseIndex = this.database.Expense.findIndex((elem)=>elem.id==id)
    this.database.Expense[expenseIndex].status = "accepted"
    localStorage.setItem("Expense",JSON.stringify(this.database.Expense))
    window.location.reload()
  }

  setStatusToReject(id:any){
    let expenseIndex = this.database.Expense.findIndex((elem)=>elem.id==id)
    this.database.Expense[expenseIndex].status = "rejected"
    localStorage.setItem("Expense",JSON.stringify(this.database.Expense))
    window.location.reload()
  }
}
