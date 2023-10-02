import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier, SupplierService } from '../../../services/supplier.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  constructor(private supplierService: SupplierService, private route: ActivatedRoute) {}

  supplier?: Supplier;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') ?? '0');
      this.supplierService.getSupplier(id).then((supplier) => this.supplier = supplier);
    });
  }
}
