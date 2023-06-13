import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../common/models';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly apiUrl = 'assets/fakedb.json';

  constructor(
    private readonly http: HttpClient,
    private accountService: AccountService
  ) { }
  
  public getServices(): Observable<Service[]> {
    const userId = this.accountService.getCurrentUser().id;
    return this.http.get<Service[]>("https://localhost:32768/api/Service");
  }
}
