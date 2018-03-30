import { Component, Input, OnInit } from '@angular/core';

import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit {
  @Input() reset: boolean;

  model: any[];

  constructor(public app: AppComponent) { }

  ngOnInit() {
  }

  changeTheme(theme) {

  }
}
