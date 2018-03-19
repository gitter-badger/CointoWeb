import { HttpModule, JsonpModule } from '@angular/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AbpModule } from '@abp/abp.module';
import { AccountComponent } from './account.component';
import { AccountLanguagesComponent } from './layout/account-languages.component';
import { AccountRoutingModule } from './account-routing.module';
import { AuthEffects } from './effects/auth.effects';
import { AuthGuard } from './services/auth-root.guard';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalModule } from 'ngx-bootstrap';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { exhaustMap } from 'rxjs/operators';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AbpModule,
    SharedModule,
    ServiceProxyModule,
    AccountRoutingModule,
    MatToolbarModule
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    AccountLanguagesComponent
  ],
  exports: [],
  providers: [LoginService]
})
export class AccountModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthGuard]
    };
  }
}

@NgModule({
  imports: [
    AccountModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class RootAuthModule { }
