import { Injectable } from '@angular/core';
import { Subscription, User, UserRole } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUser!: User;
  private currentSubscription: Subscription | undefined;

  constructor() {
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
    return this.currentUser;
  }

  getCurrentSubscription(): Subscription | undefined {
    return this.currentSubscription;
  }
}
