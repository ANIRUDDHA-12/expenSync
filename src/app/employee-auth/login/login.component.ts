import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isEyeActive = false;

  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })



  getFormControl(name:any){
    return this.loginForm.get(name);
  }

  errorFormControl(name:any){
    return this.getFormControl(name)?.dirty && this.getFormControl(name)?.invalid;
  }

  

  submitData(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  togglePassword(){
    if(this.isEyeActive){
      document.querySelector('.eye')?.setAttribute('type',"password")
      this.isEyeActive = false;
    }else{
      document.querySelector('.eye')?.setAttribute('type',"text")
      this.isEyeActive = true;
    }
  }
}