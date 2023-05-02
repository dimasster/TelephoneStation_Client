import { Component } from '@angular/core';
import { Receipt } from 'src/app/common/models';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent {
  receipts: Receipt[] | undefined;

  constructor(private receiptService: ReceiptService) {}

  ngOnInit(): void {
    this.showAllReceipts();
  }

  showAllReceipts(): void {
    this.receiptService.getReceipts().subscribe(
      response => this.receipts = response,
      error => console.log(error)
    );
  }

  showUnbought(): void {
    this.receiptService.getUnboughtReceipts().subscribe(
      response => this.receipts = response
    )
  }

  payForReceipt(receiptId: number): void {
    console.log(receiptId);
  }
}
