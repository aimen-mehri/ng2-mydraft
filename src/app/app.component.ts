import { Component } from '@angular/core';

import { ApiService } from './shared';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
