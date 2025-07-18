import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  Employee:any[] = [];
  Manager:any[] = [];
  Expense:any[] = [];
  expenseCount = 1;

  insertEmployee(data:any){
    this.Employee.push(data);
  }

  insertManager(data:any){
    this.Manager.push(data);
  }

  insertExpense(data:any){
    let newExp = {
      id : this.expenseCount,
      ...data
    };
    this.Expense.push(newExp);
    this.expenseCount++;
  }


}
