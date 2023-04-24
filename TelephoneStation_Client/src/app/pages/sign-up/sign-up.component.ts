import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = this.formBuilder.group({
    login: '',
    password: '',
    confirmPassword: ''
  });

  constructor(private formBuilder: FormBuilder) {}

  onSignUp(): void {

  }
}
