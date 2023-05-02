import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Call } from '../common/models';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private readonly apiUrl = 'assets/fakedb.json';

  constructor(
    private readonly http: HttpClient,
    private accountService: AccountService
  ) {}

  public getCalls(): Observable<Call[]> {
    const userId = this.accountService.getCurrentUser().id;
    return this.http.get<Call[]>("https://localhost:32768/api/Call/" + userId);
  }
}