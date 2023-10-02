import { Component, OnInit } from '@angular/core';
import { Supplier, SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  constructor(private supplierService: SupplierService) {}

  suppliers: Supplier[] = [];

  ngOnInit() {
    this.supplierService.getSuppliers().then((suppliers) => this.suppliers = suppliers);
  }
}
