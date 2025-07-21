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
    this.isLoggedIn = localStorage.getItem("isLogggedIn");
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")?? '');
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
    this.expenseCount++;
    localStorage.setItem("Expense",JSON.stringify(this.Expense));
  }


}
