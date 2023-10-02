import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },  
  { path: 'suppliers', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
