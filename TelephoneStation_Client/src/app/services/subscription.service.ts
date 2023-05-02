import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { Subscription } from '../common/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private readonly http: HttpClient,
    private accountService: AccountService
  ) { }

  getCurrentSubscription(): Promise<Subscription> {
    const currentUserId = this.accountService.getCurrentUser().id;
    return new Promise<Subscription>((resolve, reject) => {
      this.http.get<Subscription>("https://localhost:32768/api/Subscription/" + currentUserId)
        .subscribe(
          subscription => resolve(subscription),
          error => reject(error)
        );
    });
  }
}
