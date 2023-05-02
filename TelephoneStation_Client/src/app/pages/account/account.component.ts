import { Component } from '@angular/core';
import { Subscription, User, UserRole } from 'src/app/common/models';
import { AccountService } from 'src/app/services/account.service';
import { BallanceService } from 'src/app/services/ballance.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  account!: User;
  subscription!: Subscription;
  ballance!: number;

  constructor(
    private accountService: AccountService,
    private subscriptionService: SubscriptionService,
    private ballanceService: BallanceService
  ) {}

  async ngOnInit() {
    this.account = this.accountService.getCurrentUser();
    this.subscription = await this.subscriptionService.getCurrentSubscription();
    this.ballance = this.ballanceService.getCurrentBallance();
  }

  getRoleName(role: UserRole): string {
    switch(role) {
      case 0: return "New";
      case 1: return "Common";
      case 2: return "Admin";
      default: return "Undefined";
    }
  }

  refillBallance(): void {
    
  }

  editAccount(): void {

  }

  unsubscribe(): void {

  }

  continueSubscription(): void {

  }
}
