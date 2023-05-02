import { Component, ContentChild, Input } from '@angular/core';
import { Receipt } from 'src/app/common/models';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  @Input() receipt!: Receipt;
  @ContentChild('receiptActions') receiptActions: any;
}
