import { Component } from '@angular/core';
import { Service } from 'src/app/models';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] | undefined;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(
      (response) => { this.services = response.db.Services; },
      (error) => { console.log(error); }
    );
  }

  subscribe(subscribeId: number): void {

  }
}
