import * as _ from 'lodash';

import {
  AuthenticateModel,
  AuthenticateResultModel,
  ExternalAuthenticateModel,
  ExternalAuthenticateResultModel,
  ExternalLoginProviderInfoModel,
  TokenAuthServiceProxy
} from '@shared/service-proxies/service-proxies';

import { AppConsts } from '@shared/AppConsts';
import { Injectable } from '@angular/core';
import { LogService } from '@abp/log/log.service';
import { MessageService } from '@abp/message/message.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TokenService } from '@abp/auth/token.service';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { UtilsService } from '@abp/utils/utils.service';

@Injectable()
export class LoginService {
  static readonly twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';

  authenticateModel: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;

  rememberMe: boolean;

  constructor(
    private _tokenAuthService: TokenAuthServiceProxy,
    private _router: Router,
    private _utilsService: UtilsService,
    private _messageService: MessageService,
    private _tokenService: TokenService,
    private _logService: LogService
  ) {
    this.clear();
  }

  doLogin(loginData: AuthenticateModel): Observable<AuthenticateResultModel> {
    return this._tokenAuthService.authenticate(loginData).map(a => {
      return a;
    });
  }

  setLoginCookie(
    accessToken: string,
    encryptedAccessToken: string,
    expireInSeconds: number,
    rememberMe?: boolean
  ) {
    const tokenExpireDate = rememberMe
      ? new Date(new Date().getTime() + 1000 * expireInSeconds)
      : undefined;

    this._tokenService.setToken(accessToken, tokenExpireDate);

    this._utilsService.setCookieValue(
      AppConsts.authorization.encrptedAuthTokenName,
      encryptedAccessToken,
      tokenExpireDate,
      abp.appPath
    );
  }

  // authenticate(finallyCallback?: () => void): void {
  //   finallyCallback = finallyCallback || (() => {});

  //   this._tokenAuthService
  //     .authenticate(this.authenticateModel)
  //     .finally(finallyCallback)
  //     .subscribe((result: AuthenticateResultModel) => {
  //       this.processAuthenticateResult(result);
  //     });
  // }

  // private processAuthenticateResult(
  //   authenticateResult: AuthenticateResultModel
  // ) {
  //   this.authenticateResult = authenticateResult;

  //   if (authenticateResult.accessToken) {
  //     // Successfully logged in
  //     this.login(
  //       authenticateResult.accessToken,
  //       authenticateResult.encryptedAccessToken,
  //       authenticateResult.expireInSeconds,
  //       this.rememberMe
  //     );
  //   } else {
  //     this._logService.warn('Unexpected authenticateResult!');
  //     this._router.navigate(['account/login']);
  //   }
  // }

  // private login(
  //   accessToken: string,
  //   encryptedAccessToken: string,
  //   expireInSeconds: number,
  //   rememberMe?: boolean
  // ): void {
  //   const tokenExpireDate = rememberMe
  //     ? new Date(new Date().getTime() + 1000 * expireInSeconds)
  //     : undefined;

  //   this._tokenService.setToken(accessToken, tokenExpireDate);

  //   this._utilsService.setCookieValue(
  //     AppConsts.authorization.encrptedAuthTokenName,
  //     encryptedAccessToken,
  //     tokenExpireDate,
  //     abp.appPath
  //   );

  //   let initialUrl = UrlHelper.initialUrl;
  //   if (initialUrl.indexOf('/login') > 0) {
  //     initialUrl = AppConsts.appBaseUrl;
  //   }

  //   location.href = initialUrl;
  // }

  clear(): void {
    this._utilsService.deleteCookie(
      AppConsts.authorization.encrptedAuthTokenName,
      abp.appPath
    );
    this._tokenService.clearToken();
    this.authenticateModel = new AuthenticateModel();
    this.authenticateModel.rememberClient = false;
    this.authenticateResult = null;
    this.rememberMe = false;
  }
}
