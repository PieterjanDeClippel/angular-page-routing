import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers: Customer[] = [];

  ngOnInit() {
    this.customerService.getCustomers().then((customers) => this.customers = customers);
  }
}
