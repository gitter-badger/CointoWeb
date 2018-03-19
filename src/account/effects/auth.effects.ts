import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  Login,
  LoginFailure,
  LoginSuccess
} from '../actions/auth.action';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthenticateModel } from '../../shared/service-proxies/service-proxies';
import { Back } from '../../store/router.actions';
import { Go } from 'store/router.actions';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((auth: AuthenticateModel) =>
      this.authService.doLogin(auth).pipe(
        map(user => {
          if (user.accessToken) {
            this.authService.setLoginCookie(
              user.accessToken,
              user.encryptedAccessToken,
              user.expireInSeconds,
              true
            );
            return new LoginSuccess({ user });
          } else {
            return new LoginFailure(null);
          }
        }),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => {
      this.router.navigate(['/app']);
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.authService.clear();
      this.router.navigate(['/account/login']);
    })
  );

  constructor(
    private actions$: Actions,
    private authService: LoginService,
    private router: Router
  ) {}
}
