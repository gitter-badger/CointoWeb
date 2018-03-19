import * as fromRoot from '../../store/index';

import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AbpSessionService } from '@abp/session/abp-session.service';
import { AppComponentBase } from '@shared/app-component-base';
import { Login } from '../actions/auth.action';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { accountModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements AfterViewInit {
  // email = new FormControl('', [Validators.required]);

  @ViewChild('inputUsername') inputUsername: ElementRef;
  @ViewChild('inputPassword') inputPassword: ElementRef;

  submitting = false;

  ngAfterViewInit(): void {
    const list = Array.from(document.getElementsByTagName('input'));
    for (const item of list) {
      (<HTMLInputElement>item).addEventListener('blur', function (evt) {
        const el = $(this);
        // tslint:disable-next-line:triple-equals
        if (el.val() != '') {
          el.addClass('ui-state-filled');
        } else {
          el.removeClass('ui-state-filled');
        }
      });
      // tslint:disable-next-line:triple-equals
      if (item.value != '') {
        item.classList.add('ui-state-filled');
      } else {
        item.classList.remove('ui-state-filled');
      }
    }
  }

  constructor(
    injector: Injector,
    private _store: Store<fromRoot.AppState>,
    private _router: Router,
    private _sessionService: AbpSessionService,
    public loginService: LoginService
  ) {
    super(injector);
  }

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }

    return true;
  }

  login(): void {
    this.submitting = true;
    this._store.dispatch(new Login(this.loginService.authenticateModel));
    // this.loginService.authenticate(() => (this.submitting = false));
  }
}
