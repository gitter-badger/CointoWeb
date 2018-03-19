import {
  AccountServiceProxy,
  RegisterInput,
  RegisterOutput
} from '@shared/service-proxies/service-proxies';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  ViewChild
} from '@angular/core';

import { AppComponentBase } from '@shared/app-component-base';
import { Location } from '@angular/common';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { style } from '@angular/core';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  animations: [accountModuleAnimation()]
})
export class RegisterComponent extends AppComponentBase
  implements AfterViewInit {
  @ViewChild('cardBody') cardBody: ElementRef;

  model: RegisterInput = new RegisterInput();

  saving = false;

  constructor(
    injector: Injector,
    private _accountService: AccountServiceProxy,
    private _router: Router,
    private readonly _loginService: LoginService,
    private _location: Location
  ) {
    super(injector);
  }

  ngAfterViewInit(): void {}

  back(): void {
    this._location.back();
  }

  save(): void {
    this.saving = true;
    this._accountService
      .register(this.model)
      .finally(() => {
        this.saving = false;
      })
      .subscribe((result: RegisterOutput) => {
        if (!result.canLogin) {
          this.notify.success(this.l('SuccessfullyRegistered'));
          this._router.navigate(['/login']);
          return;
        }

        // Autheticate
        this.saving = true;
        this._loginService.authenticateModel.userNameOrEmailAddress = this.model.userName;
        this._loginService.authenticateModel.password = this.model.password;
        // this._loginService.authenticate(() => {
        //   this.saving = false;
        // });
      });
  }
}
