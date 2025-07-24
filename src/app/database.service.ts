import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() {
    this.loadData();
   }

  isLoggedIn:any = false;
  loggedInUser!:any;
  Employee:any[] = [];
  Manager:any[] = [];
  Expense:any[] = [];
  expenseCount = 1;

  updateLoggedIn(value:boolean){
    this.isLoggedIn = value;
    localStorage.setItem("isLoggedIn",JSON.stringify(this.isLoggedIn));
  }

  updateLoggedUser(value:any){
    this.loggedInUser = value;
    localStorage.setItem("loggedInUser",JSON.stringify(this.loggedInUser));
  }

  loadData(){
    this.Employee = JSON.parse(localStorage.getItem("Employee") ?? "[]");
    this.Manager = JSON.parse(localStorage.getItem("Manager") ?? "[]");
    this.Expense = JSON.parse(localStorage.getItem("Expense") ?? "[]");
    this.isLoggedIn = JSON.parse(localStorage.getItem("isLogggedIn") ?? 'false');
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")?? 'null');
    this.expenseCount = JSON.parse(localStorage.getItem("ExpenseCount")?? "0");
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
      status : "pending" ,
      ...data
    };
    this.Expense.push(newExp);
    console.log(newExp,this.expenseCount)
    this.expenseCount++;
    localStorage.setItem("Expense",JSON.stringify(this.Expense));
    localStorage.setItem("ExpenseCount",JSON.stringify(this.expenseCount));
    
  }


}
