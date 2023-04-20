import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Call } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private readonly apiUrl = 'assets/fakedb.json';

  constructor(private readonly http: HttpClient) { }

  public getCalls(): Observable<{ db: { Calls: Call[] } }> {
    return this.http.get<{ db: { Calls: Call[] } }>(this.apiUrl);
  }
}
