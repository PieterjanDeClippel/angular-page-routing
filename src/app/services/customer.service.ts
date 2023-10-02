import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  vatNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private list: Customer[] = [
    { id: 1, name: 'Proximus', vatNumber: 'BE 0202.239.951' },
    { id: 2, name: 'Telenet', vatNumber: 'BE 0473.416.418' },
    { id: 3, name: 'Fluvius', vatNumber: 'BE 0477.445.084' },
  ]

  public getCustomers() {
    return new Promise<Customer[]>((resolve) => resolve(this.list));
  }

  public getCustomer(id: number) {
    return new Promise<Customer | undefined>((resolve) => resolve(this.list.find(c => c.id === id)));
  }

}
