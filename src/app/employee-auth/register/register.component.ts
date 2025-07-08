import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isEyeActive = false;
  isEyeActive2 = false;

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    fullName : new FormControl('',[Validators.required]),
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required]),
    designation : new FormControl('',[Validators.required]),
    profileImg : new FormControl('',[Validators.required]),
    dob : new FormControl('',[Validators.required])
  })

  getFormControl(name:any){
    return this.registerForm.get(name);
  }

  errorFormControl(name:any){
    return this.getFormControl(name)?.dirty && this.getFormControl(name)?.invalid;
  }

  confirmPassword(){
    return this.getFormControl('password')?.dirty && this.getFormControl('confirmPassword')?.dirty && this.getFormControl('password')?.value != this.getFormControl('confirmPassword')?.value;
  }

  submitData(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
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

  toggleConfirmPassword(){
    if(this.isEyeActive2){
      document.querySelector('.eye2')?.setAttribute('type',"password")
      this.isEyeActive2 = false;
    }else{
      document.querySelector('.eye2')?.setAttribute('type',"text")
      this.isEyeActive2 = true;
    }
  }
}

