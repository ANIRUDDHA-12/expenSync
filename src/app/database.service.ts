import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() {
    this.loadData();
   }

  Employee:any[] = [];
  Manager:any[] = [];
  Expense:any[] = [];
  expenseCount = 1;

  loadData(){
    this.Employee = JSON.parse(localStorage.getItem("Employee") ?? "[]");
    this.Manager = JSON.parse(localStorage.getItem("Manager") ?? "[]");
    this.Expense = JSON.parse(localStorage.getItem("Expense") ?? "[]");
  }

  insertEmployee(data:any){
    this.Employee.push(data);
    localStorage.setItem("Employee",JSON.stringify(this.Employee));
  }

  insertManager(data:any){
    this.Manager.push(data);
    localStorage.setItem("Manager",JSON.stringify(this.Manager));
  }

  insertExpense(data:any){
    let newExp = {
      id : this.expenseCount,
      ...data
    };
    this.Expense.push(newExp);
    this.expenseCount++;
    localStorage.setItem("Expense",JSON.stringify(this.Expense));
  }


}
