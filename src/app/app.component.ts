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
import { AppUiState, ToggleInlineProfile } from '@app/store/appUi.state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoadCountries, MasterDataState } from './store/appMasterData.state';
import { Ng4LoadingSpinnerComponent, Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { TdLayoutComponent, TdLayoutNavListComponent, TdMediaService, TdNavigationDrawerComponent } from '@covalent/core';

import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';
import { AppInlineProfileComponent } from './layout/app-profile.component';
import { AppRightpanelComponent } from '@app/layout/app-rightpanel.component';
import { AppTopbarComponent } from '@app/layout/app-topbar.component';
import { CountriesServiceProxy } from '@shared/service-proxies/service-proxies';
import { LoadLanguages } from '@app/store/appMasterData.state';
import { Observable } from 'rxjs/Observable';
import { Select } from '@ngxs/store';
import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import { SignalRHelper } from '@shared/helpers/SignalRHelper';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs/Subscription';
import { ToggleMainMenu } from './store/appUi.state';
import { zip } from 'rxjs/operators';

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

  @Select(AppUiState.mainMenuVisible) staticMenuDesktopInactive$: Observable<boolean>;
  @Select(AppUiState.inlineProfileVisible) inlineProfileMenuIsVisible$: Observable<boolean>;
  rightPanelIsVisible$: Observable<boolean>;

  @ViewChild('layoutNav') layoutNav: TdLayoutComponent;
  @ViewChild('drawer') drawer: TdNavigationDrawerComponent;

  ngAfterViewInit() {

  }

  constructor(
    injector: Injector,
    public renderer: Renderer,
    private store: Store,
    private media: TdMediaService,
    private ngZone: NgZone,
    private ng4LoadingSpinnerService: Ng4LoadingSpinnerService,
    private sanitizer: DomSanitizer
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.store.select(MasterDataState.isLoading).subscribe(b => {
      if (b) {
        this.ng4LoadingSpinnerService.show();
      } else {
        this.ng4LoadingSpinnerService.hide()
      }
    });
    this._querySubscription = this.media.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this.ngZone.run(() => {
        this.isDesktop = matches;
      });
    });

    this.store.dispatch(new LoadLanguages());
    this.store.dispatch(new LoadCountries());

    // SIGNALR
    // if (this.appSession.application.features['SignalR']) {
    //   if (this.appSession.application.features['SignalR.AspNetCore']) {
    //     SignalRAspNetCoreHelper.initSignalR();
    //   } else {
    //     SignalRHelper.initSignalR();
    //   }
    // }

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
    // todo: muss über property doch irgendwie gehen
    this.store.dispatch(
      new ToggleInlineProfile(this.drawer.menuToggled)
    );
    this.drawer.toggleMenu();
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
