import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly apiUrl = 'assets/fakedb.json';

  constructor(private readonly http: HttpClient) { }

  public getServices(): Observable<{ db: { Services: Service[] } }> {
    return this.http.get<{ db: { Services: Service[] } }>(this.apiUrl);
  }
}
