import { Injectable } from '@angular/core';

export interface Supplier {
  id: number;
  name: string;
  vatNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private list: Supplier[] = [
    { id: 1, name: 'Proximus', vatNumber: 'BE 0202.239.951' },
    { id: 2, name: 'Telenet', vatNumber: 'BE 0473.416.418' },
    { id: 3, name: 'Fluvius', vatNumber: 'BE 0477.445.084' },
  ]

  public getSuppliers() {
    return new Promise<Supplier[]>((resolve) => resolve(this.list));
  }

  public getSupplier(id: number) {
    return new Promise<Supplier | undefined>((resolve) => resolve(this.list.find(c => c.id === id)));
  }

}
