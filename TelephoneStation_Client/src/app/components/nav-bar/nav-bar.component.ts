import { Component } from '@angular/core';
import { UserRole } from 'src/app/common/models';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isAdmin = true;
  constructor(private accountService: AccountService) {
    this.isAdmin = this.accountService.getCurrentUser().role === UserRole.Admin;
  }
}
