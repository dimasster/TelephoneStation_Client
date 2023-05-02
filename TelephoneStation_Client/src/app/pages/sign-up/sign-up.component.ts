import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  async onSignUp(): Promise<void> {
    const login = this.signUpForm.get("login")?.value || "";
    const password = this.signUpForm.get("password")?.value || "";
    const accToLogIn = { login, password };
    if (await this.accountService.SignUp(accToLogIn)) {
      this.router.navigateByUrl('/phone-book');
    }
  }
}
