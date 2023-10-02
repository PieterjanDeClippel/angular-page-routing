import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paging';
}

// ng g module pages --module app --route .
// ng g module customer --module pages --route customers
// ng g module supplier --module pages --route suppliers
// ng g module create --module customer --route create
// ng g module show --module customer --route :id
// ng g module edit --module customer --route :id/edit
// ng g module create --module supplier --route create
// ng g module show --module supplier --route :id
// ng g module edit --module supplier --route :id/edit