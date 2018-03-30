import {
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
import { TdLayoutNavListComponent, TdMediaService } from '@covalent/core';

import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';
import { AppInlineProfileComponent } from './layout/app-profile.component';
import { AppRightpanelComponent } from '@app/layout/app-rightpanel.component';
import { AppTopbarComponent } from '@app/layout/app-topbar.component';
import { AppUiState } from '@app/store/appUi.state';
import { CountriesServiceProxy } from '@shared/service-proxies/service-proxies';
import { LoadCountries } from './store/appMasterData.state';
import { LoadLanguages } from '@app/store/appMasterData.state';
import { Observable } from 'rxjs/Observable';
import { Select } from '@ngxs/store';
import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import { SignalRHelper } from '@shared/helpers/SignalRHelper';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs/Subscription';
import { ToggleMainMenu } from './store/appUi.state';

declare var jQuery: any;

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppComponentBase
  implements AfterViewInit, OnInit, AfterViewInit, OnDestroy {

  layoutContainer: HTMLDivElement;
  layoutMenuScroller: HTMLDivElement;
  activeTopbarItem: any;
  menuHoverActive: boolean;
  isDesktop: boolean;
  private _querySubscription: Subscription;

  @Select(AppUiState.rightPanelVisible) staticMenuDesktopInactive$: Observable<boolean>;

  rightPanelIsVisible$: Observable<boolean>;
  inlineProfileMenuIsVisible$: Observable<boolean>;

  @ViewChild('layoutNav') layoutNav: TdLayoutNavListComponent;
  ngAfterViewInit() {

  }

  constructor(
    injector: Injector,
    public renderer: Renderer,
    private store: Store,
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

    this.store.dispatch(new LoadLanguages());
    this.store.dispatch(new LoadCountries());

    // this._countryService.getAll().subscribe(x => alert(JSON.stringify(x)));
    // this.rightPanelIsVisible$ = this.store.select(getUiRightPanelVisible);
    // this.inlineProfileMenuIsVisible$ = this.store.select(
    //   getUiProfileMenuVisible
    // );
    // this.staticMenuDesktopInactive$ = this.store
    //   .select(getUiMainMenuVisible);

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

  onToggleRightPanel(event: any): void {
    // this.store.dispatch(
    //   new ToggleRightPanelAction({ isVisible: this.rightPanel.isVisible })
    // );
  }

  onToggleInlineProfileMenu(visible: boolean): void {
    // this.store.dispatch(
    //   new ToggleProfileMenuAction({ isVisible: !visible })
    // );
  }

  onLogout(event: any): void {
    // this.store.dispatch(new Logout());
  }

  onToggleMainMenu() {
    this.store.dispatch(
      new ToggleMainMenu(this.layoutNav.opened)
    );
  }

  ngOnDestroy() {
    this._querySubscription.unsubscribe();
  }
}
