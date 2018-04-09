import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-topbar]',
  templateUrl: './app-topbar.component.html'
})
export class AppTopbarComponent {
  @Output() toggleVisibleMainMenu = new EventEmitter();

  constructor() { }
}
