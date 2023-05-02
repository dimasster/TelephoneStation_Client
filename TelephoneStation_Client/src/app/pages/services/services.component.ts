import { Component } from '@angular/core';
import { Service } from 'src/app/common/models';
import { ServiceService } from 'src/app/services/service.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] | undefined;
  currentService!: Service;

  constructor(
    private serviceService: ServiceService,
    private subService: SubscriptionService
  ) {}

  async ngOnInit(): Promise<void> {
    this.serviceService.getServices().subscribe(
      response => this.services = response,
      error => console.log(error)
    );
    this.currentService = (await this.subService.getCurrentSubscription()).service!;
  }

  subscribe(serviceId: number): void {

  }

  unsubscribe(): void {

  }

  continueSubscription(): void {

  }
}
