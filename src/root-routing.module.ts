import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './account/services/auth-root.guard';
import { ErrorPageComponent } from './error/500/errorPage.component';
import { LandingPageComponent } from './landing/landingPage.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './error/404/notFound.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: 'account/account.module#AccountModule', // Lazy load account module
    data: { preload: true }
  },
  {
    path: 'app',
    loadChildren: 'app/app.module#AppModule', // Lazy load account module
    data: { preload: false },
    canActivate: [AuthGuard]
  },
  { path: '404', component: NotFoundComponent },
  // { path: '500', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class RootRoutingModule { }
