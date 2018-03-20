import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  animate,
  forwardRef,
  state,
  style,
  transition,
  trigger
} from '@angular/core';

import { AppComponent } from '../app.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TdExpansionPanelComponent } from '@covalent/core';

@Component({
  selector: 'app-inline-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInlineProfileComponent {
  @Input() visible: boolean;
  @Output() logout = new EventEmitter();
  @Output() toggleProfileMenu = new EventEmitter<boolean>();
  @ViewChild('profilePanel') profilePanel: TdExpansionPanelComponent;
}
