import * as Hammer from 'hammerjs';

import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

import { AboutComponent } from '@app/about/about.component';
import { AbpModule } from '@abp/abp.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from 'app/layout/app-footer.component';
import { AppInlineProfileComponent } from './layout/app-profile.component';
import { AppMenuComponent } from './layout/app-menu.component';
import { AppRightpanelComponent } from './layout/app-rightpanel.component';
import { AppRoutingModule } from './app-routing.module';
import { AppTopbarComponent } from './layout/app-topbar.component';
import { AppUiState } from '@app/store/appUi.state';
import { AvatarModule } from 'ng2-avatar';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { MasterDataState } from '@app/store/appMasterData.state';
import { MaterialInput } from '@shared/directives/material-input.directive';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxsModule } from '@ngxs/store';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_HORIZONTAL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopBarLanguageSwitchComponent,
    AppTopbarComponent,
    AppInlineProfileComponent,
    AppMenuComponent,
    AppRightpanelComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    AbpModule,
    AppRoutingModule,
    NgxsModule.forFeature([AppUiState, MasterDataState]),
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    DashboardModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AvatarModule.forRoot()
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }]
})
export class AppModule { }
