import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { NgModule } from '@angular/core';
import { TenantsComponent } from './tenants/tenants.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          // { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
          // { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
          // { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
          // { path: 'about', component: AboutComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
