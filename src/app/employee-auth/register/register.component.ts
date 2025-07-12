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
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    profileImg: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required])
  });

  getFormControl(name: string) {
    return this.registerForm.get(name);
  }

  errorFormControl(name: string) {
    const control = this.getFormControl(name);
    return control?.dirty && control?.invalid;
  }

  confirmPassword() {
    const password = this.getFormControl('password')?.value;
    const confirmPassword = this.getFormControl('confirmPassword')?.value;
    return this.getFormControl('password')?.dirty &&
           this.getFormControl('confirmPassword')?.dirty &&
           password !== confirmPassword;
  }

  submitData() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  togglePassword() {
    const passwordInput = document.querySelector('.eye') as HTMLInputElement;
    if (passwordInput) {
      this.isEyeActive = !this.isEyeActive;
      passwordInput.type = this.isEyeActive ? 'text' : 'password';
    }
  }

  toggleConfirmPassword() {
    const confirmPasswordInput = document.querySelector('.eye2') as HTMLInputElement;
    if (confirmPasswordInput) {
      this.isEyeActive2 = !this.isEyeActive2;
      confirmPasswordInput.type = this.isEyeActive2 ? 'text' : 'password';
    }
  }
}
