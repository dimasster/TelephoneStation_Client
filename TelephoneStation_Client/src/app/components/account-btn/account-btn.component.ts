import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-btn',
  templateUrl: './account-btn.component.html',
  styleUrls: ['./account-btn.component.css']
})
export class AccountBtnComponent {
  userIcon = faUser;
}
