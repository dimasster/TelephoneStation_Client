import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/models';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'assets/fakedb.json';

  constructor(
    private readonly http: HttpClient,
    private accountService: AccountService
  ) { }
  
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:32768/api/User");
  }
}
