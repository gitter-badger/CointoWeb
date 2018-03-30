import { ABP_HTTP_PROVIDER, AbpModule } from '@abp/abp.module';
import { APP_INITIALIZER, Injector, LOCALE_ID, NgModule } from '@angular/core';
import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { API_BASE_URL } from '@shared/service-proxies/service-proxies';
import { AccountModule } from './account/account.module';
import { AppConsts } from '@shared/AppConsts';
import { AppPreBootstrap } from './AppPreBootstrap';
import { AppSessionService } from '@shared/session/app-session.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorModule } from 'error/error.module';
import { LandingPageModule } from './landing/landingPage.module';
import { ModalModule } from 'ngx-bootstrap';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { RouterState } from './store/router.state';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { environment } from './environments/environment';

export function appInitializerFactory(injector: Injector) {
  return () => {
    return new Promise<boolean>((resolve, reject) => {
      AppPreBootstrap.run(() => {
        const appSessionService: AppSessionService = injector.get(
          AppSessionService
        );
        appSessionService.init().then(
          result => {
            resolve(result);
          },
          err => {
            reject(err);
          }
        );
      });
    });
  };
}

export function getRemoteServiceBaseUrl(): string {
  return 'http://localhost:21021'; // AppConsts.remoteServiceBaseUrl;
}

export function getCurrentLanguage(): string {
  return abp.localization.currentLanguage.name;
}

export function instrumentOptions() {
  return {
    maxAge: 10
  };
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    AbpModule,
    ServiceProxyModule,
    RootRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    LandingPageModule,
    ErrorModule,
    NgxsModule.forRoot([RouterState]),
    AccountModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      /**
       * Logger to implement. Defaults to console.
       */
      logger: console,

      /**
       * Collapse the log by default or not. Defaults to true.
       */
      collapsed: true
    })
  ],
  declarations: [RootComponent],
  providers: [
    ABP_HTTP_PROVIDER,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector],
      multi: true
    },
    {
      provide: LOCALE_ID,
      useFactory: getCurrentLanguage
    }
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
