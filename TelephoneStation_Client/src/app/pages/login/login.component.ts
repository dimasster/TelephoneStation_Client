import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logInForm = this.formBuilder.group({
    login: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder) {}

  onLogIn(): void {

  }
}
