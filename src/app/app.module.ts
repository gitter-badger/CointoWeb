import { HttpModule, JsonpModule } from '@angular/http';

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
import { CommonModule } from '@angular/common';
import { CreateRoleComponent } from '@app/roles/create-role/create-role.component';
import { CreateUserComponent } from '@app/users/create-user/create-user.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { MasterDataState } from '@app/store/appMasterData.state';
import { MaterialInput } from '@shared/directives/material-input.directive';
import { ModalModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxsModule } from '@ngxs/store';
import { RolesComponent } from '@app/roles/roles.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { UsersComponent } from '@app/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    RolesComponent,
    CreateRoleComponent,
    EditRoleComponent,
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
    HttpModule,
    JsonpModule,
    ModalModule.forRoot(),
    AbpModule,
    AppRoutingModule,
    NgxsModule.forFeature([AppUiState, MasterDataState]),
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    DashboardModule
  ],
  providers: []
})
export class AppModule { }
