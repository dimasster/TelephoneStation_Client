import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'assets/fakedb.json';

  constructor(private readonly http: HttpClient) { }

  public getUsers(): Observable<{ db: { Users: User[] } }> {
    return this.http.get<{ db: { Users: User[] } }>(this.apiUrl);
  }
}
