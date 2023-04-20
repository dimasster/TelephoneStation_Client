import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receipt } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private readonly apiUrl = 'assets/fakedb.json';

  constructor(private readonly http: HttpClient) { }

  public getReceipts(): Observable<{ db: { Receipts: Receipt[] } }> {
    return this.http.get<{ db: { Receipts: Receipt[] } }>(this.apiUrl);
  }
}
