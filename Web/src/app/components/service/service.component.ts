import { Component, ContentChild, Input } from '@angular/core';
import { Service } from 'src/app/common/models';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() service!: Service;
  @ContentChild('serviceActions') serviceActions: any;
}
