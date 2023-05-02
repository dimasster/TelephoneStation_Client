import { Injectable } from '@angular/core';
import { Account, Subscription, User, UserRole } from '../common/models';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUser!: User;

  constructor(
    private readonly http: HttpClient
  ) {
    this.currentUser = {
      id: 404,
      name: "undefined",
      lastName: undefined,
      phoneNumber: 404,
      role: UserRole.Unknown,
      isBanned: false,
      ballance: 0
    }
  }

  getCurrentUser(): User {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      return JSON.parse(storedUser);
    } else {
      return this.currentUser;
    }
  }

  async logIn(account: Account): Promise<boolean> {
    try {
      const response = await lastValueFrom(this.http.post<User>("https://localhost:32768/api/Account/log_in", account));
      localStorage.setItem('currentUser', JSON.stringify(response));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } 

  async SignUp(account: Account): Promise<boolean> {
    try {
      const response = await lastValueFrom(this.http.post<User>("https://localhost:32768/api/Account/sign_up", account));
      localStorage.setItem('currentUser', JSON.stringify(response));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
