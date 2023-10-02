import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
  {
    path: ':id',
    // I added this
    component: CustomerComponent,
    loadChildren: () => import('./show/show.module').then(m => m.ShowModule)
  },
  {
    path: ':id/edit',
    // I added this
    component: CustomerComponent,
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
