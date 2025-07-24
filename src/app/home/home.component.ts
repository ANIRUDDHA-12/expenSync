import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private database : DatabaseService){}

  loggedInUser = this.database.loggedInUser
  isLoggedIn:boolean = JSON.parse(localStorage.getItem("isLoggedIn")?? "false")
  isEmployee = false
  
  ngOnInit(){
    let employee = this.database.Employee.find((elem)=>elem.username==this.loggedInUser)

    if(employee){
      this.isEmployee = true
    }else{
      this.isEmployee = false
    }
  }

  updateLogOut(){
    this.database.isLoggedIn = false
    localStorage.setItem("isLoggedIn",JSON.stringify(this.database.isLoggedIn))
    window.location.reload()
  }

}
