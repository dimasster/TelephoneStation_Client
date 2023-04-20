import { Component } from '@angular/core';
import { Call, User } from 'src/app/models';
import { CallService } from 'src/app/services/call.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
  users: User[] | undefined;
  calls: Call[] | undefined;
  onContacts = true;

  constructor(
    private userService: UserService,
    private callService: CallService) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers(): void {
    this.onContacts = true;
    this.userService.getUsers().subscribe(
      (response) => { this.users = response.db.Users; },
      (error) => { console.log(error); }
    );
  }

  showSavedUsers(): void {

  }

  showCallHistory(): void {
    this.onContacts = false;
    this.callService.getCalls().subscribe(
      (response) => { this.calls = response.db.Calls; },
      (error) => { console.log(error); }
    );
  }

  callToUser(userId: number) {

  }

  saveUser(userId: number) {

  }
}
