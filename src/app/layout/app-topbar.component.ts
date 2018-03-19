import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html'
})
export class AppTopbarComponent {
  @Output() toggleVisibleRightPanel = new EventEmitter();
  @Output() toggleVisibleMainMenu = new EventEmitter();

  constructor() {}
}
