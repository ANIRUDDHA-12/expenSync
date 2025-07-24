import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private database:DatabaseService,private router:Router){}
  isEyeActive = false;
  isInvalidCredentials = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  getFormControl(name: string) {
    return this.loginForm.get(name);
  }

  errorFormControl(name: string) {
    const control = this.getFormControl(name);
    return control?.dirty && control?.invalid;
  }

  // submitData() {
  //   console.log(this.loginForm.value);
  //   this.loginForm.reset();
  // }

  togglePassword() {
    const passwordInput = document.querySelector('.eye') as HTMLInputElement;
    if (passwordInput) {
      this.isEyeActive = !this.isEyeActive;
      passwordInput.type = this.isEyeActive ? 'text' : 'password';
    }
  }


  submitData(){
    console.log(this.loginForm.value)
    this.validateLogin(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value)
  }

  validateLogin(username:any,password:any){
    let users = this.database.Employee;
    // users = {...this.database.Manager};
    users.push(...this.database.Manager); 
    for (let user of users){
      if(user.username === username && user.password === password){
        this.database.updateLoggedIn(true);
        this.database.updateLoggedUser(username);
        // this.router.navigate(['']);
      }else{
        this.isInvalidCredentials = true;
      }
    }
  }
}
