import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier.component';

const routes: Routes = [
  { path: '', component: SupplierComponent },
  { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
  {
    path: ':id',
    loadChildren: () => import('./show/show.module').then(m => m.ShowModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
