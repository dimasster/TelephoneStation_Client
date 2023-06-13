import { Component, Input } from '@angular/core';
import { Call, CallStatus } from 'src/app/common/models';

@Component({
  selector: 'app-call-item',
  templateUrl: './call-item.component.html',
  styleUrls: ['./call-item.component.css']
})
export class CallItemComponent {
  callStatus = CallStatus;
  @Input() call!: Call;
}
