import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-rightpanel',
  templateUrl: './app-rightpanel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRightpanelComponent implements OnDestroy, AfterViewInit {
  @Input() isVisible;
  @Output() toggleVisible = new EventEmitter();
  rightPanelMenuScroller: HTMLDivElement;

  @ViewChild('rightPanelMenuScroller')
  rightPanelMenuScrollerViewChild: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.rightPanelMenuScroller = <HTMLDivElement>this
      .rightPanelMenuScrollerViewChild.nativeElement;

    setTimeout(() => {
      jQuery(this.rightPanelMenuScroller).nanoScroller({ flash: true });
    }, 10);
  }

  ngOnDestroy() {
    jQuery(this.rightPanelMenuScroller).nanoScroller({ flash: true });
  }
}
