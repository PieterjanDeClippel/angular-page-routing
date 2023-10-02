import { Component } from '@angular/core';
import { Customer, CustomerService } from '../../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  constructor(private customerService: CustomerService, private route: ActivatedRoute) {}

  customer?: Customer;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') ?? '0');
      this.customerService.getCustomer(id).then((customer) => this.customer = customer);
    });
  }
}
