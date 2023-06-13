import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  async onLogIn(): Promise<void> {
    const login = this.logInForm.get("login")?.value || "";
    const password = this.logInForm.get("password")?.value || "";
    const accToLogIn = { login, password };
    if (await this.accountService.logIn(accToLogIn)) {
      this.router.navigateByUrl('/phone-book');
    }
  }
}
