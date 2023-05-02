import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Receipt } from '../common/models';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private readonly apiUrl = 'assets/fakedb.json';

  constructor(
    private readonly http: HttpClient,
    private accountService: AccountService
  ) { }

  public getReceipts(): Observable<Receipt[]> {
    const userId = this.accountService.getCurrentUser().id;
    return this.http.get<Receipt[]>("https://localhost:32768/api/Receipt/" + userId);
  }

  public getUnboughtReceipts(): Observable<Receipt[]> {
    return this.getReceipts().pipe(
      map(receipts => receipts.filter(receipt => !receipt.isBought))
    );
  }
}
