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

  submitData() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  togglePassword() {
    const passwordInput = document.querySelector('.eye') as HTMLInputElement;
    if (passwordInput) {
      this.isEyeActive = !this.isEyeActive;
      passwordInput.type = this.isEyeActive ? 'text' : 'password';
    }
  }
}
