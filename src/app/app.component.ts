﻿import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer,
  ViewChild
} from '@angular/core';
import { AppState, getUiMainMenuVisible, getUiRightPanelVisible } from 'store';
import {
  ToggleMainMenuAction,
  ToggleRightPanelAction
} from '@app/actions/appUiState.actions';

import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';
import { AppInlineProfileComponent } from './layout/app-profile.component';
import { AppRightpanelComponent } from '@app/layout/app-rightpanel.component';
import { AppTopbarComponent } from '@app/layout/app-topbar.component';
import { Logout } from 'account/actions/auth.action';
import { Observable } from 'rxjs/Observable';
import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import { SignalRHelper } from '@shared/helpers/SignalRHelper';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { TdMediaService } from '@covalent/core';
import { ToggleProfileMenuAction } from './actions/appUiState.actions';
import { getMainMenuVisible } from '@app/reducer/appUiState.reducer';
import { getUiProfileMenuVisible } from '../store/index';

enum MenuOrientation {
  STATIC,
  OVERLAY,
  SLIM,
  HORIZONTAL
}

declare var jQuery: any;

@Component({
  templateUrl: './app.component.html'
})
export class AppComponent extends AppComponentBase
  implements AfterViewInit, OnInit, AfterViewInit, OnDestroy {

  layoutContainer: HTMLDivElement;
  layoutMenuScroller: HTMLDivElement;
  activeTopbarItem: any;
  menuHoverActive: boolean;
  isDesktop: boolean;
  private _querySubscription: Subscription;

  staticMenuDesktopInactive$: Observable<boolean>;
  rightPanelIsVisible$: Observable<boolean>;
  inlineProfileMenuIsVisible$: Observable<boolean>;

  // @ViewChild('rightPanel') rightPanel: AppRightpanelComponent;
  // @ViewChild('inlineProfile') inlineProfile: AppInlineProfileComponent;
  // @ViewChild('layoutContainer') layourContainerViewChild: ElementRef;
  // @ViewChild('layoutMenuScroller') layoutMenuScrollerViewChild: ElementRef;
  ngAfterViewInit() {

  }

  constructor(
    injector: Injector,
    public renderer: Renderer,
    private store: Store<AppState>,
    private media: TdMediaService,
    private _ngZone: NgZone
  ) {
    super(injector);
  }

  ngOnInit(): void {
    // if (this.appSession.application.features['SignalR']) {
    //   if (this.appSession.application.features['SignalR.AspNetCore']) {
    //     SignalRAspNetCoreHelper.initSignalR();
    //   } else {
    //     SignalRHelper.initSignalR();
    //   }
    // }
    this._querySubscription = this.media.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        this.isDesktop = matches;
      });
    });

    this.rightPanelIsVisible$ = this.store.select(getUiRightPanelVisible);
    this.inlineProfileMenuIsVisible$ = this.store.select(
      getUiProfileMenuVisible
    );
    this.staticMenuDesktopInactive$ = this.store
      .select(getUiMainMenuVisible)
      .map(b => {
        if (this.isDesktop) {
          return !b;
        } else {
          return b;
        }
      });

    // abp.event.on('abp.notifications.received', userNotification => {
    //   abp.notifications.showUiNotifyForUserNotification(userNotification);

    //   // Desktop notification
    //   Push.create('AbpZeroTemplate', {
    //     body: userNotification.notification.data.message,
    //     icon: abp.appPath + 'assets/app-logo-small.png',
    //     timeout: 6000,
    //     onClick: function() {
    //       window.focus();
    //       this.close();
    //     }
    //   });
    // });
  }

  onLayoutClick() { }

  onMenuClick($event) {
    setTimeout(() => {
      jQuery(this.layoutMenuScroller).nanoScroller();
    }, 500);
  }
  onTopbarMenuButtonClick(event) {
    event.preventDefault();
  }
  onTopbarItemClick(event, item) {
    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }
    event.preventDefault();
  }

  onToggleRightPanel(event: any): void {
    // this.store.dispatch(
    //   new ToggleRightPanelAction({ isVisible: this.rightPanel.isVisible })
    // );
  }

  onToggleInlineProfileMenu(event: any): void {
    // this.store.dispatch(
    //   new ToggleProfileMenuAction({ isVisible: this.inlineProfile.visible })
    // );
  }

  onLogout(event: any): void {
    this.store.dispatch(new Logout());
  }

  onToggleMainMenu(evt: any) {
    // this.store.dispatch(
    //   new ToggleMainMenuAction({
    //     isVisible:
    //       this.layoutContainer.attributes
    //         .getNamedItem('class')
    //         .value.indexOf('layout-menu-static-inactive') < 0
    //   })
    // );
  }

  ngOnDestroy() {
    this._querySubscription.unsubscribe();
  }
}