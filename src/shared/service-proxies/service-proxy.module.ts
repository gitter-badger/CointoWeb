import * as ApiServiceProxies from './service-proxies';

import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    ApiServiceProxies.RoleServiceProxy,
    ApiServiceProxies.SessionServiceProxy,
    ApiServiceProxies.TenantServiceProxy,
    ApiServiceProxies.UserServiceProxy,
    ApiServiceProxies.TokenAuthServiceProxy,
    ApiServiceProxies.AccountServiceProxy,
    ApiServiceProxies.ConfigurationServiceProxy,
    ApiServiceProxies.CountriesServiceProxy,
    ApiServiceProxies.LanguagesServiceProxy
  ]
})
export class ServiceProxyModule { }
