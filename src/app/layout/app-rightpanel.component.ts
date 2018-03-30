import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-rightpanel',
  templateUrl: './app-rightpanel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRightpanelComponent {
  @Input() isVisible;
  @Output() toggleVisible = new EventEmitter();

}

