import { Component, ContentChild, Input } from '@angular/core';

import { User } from '../../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact!: User;
  @ContentChild('contactActions') contactActions: any;

  constructor() { }
}
