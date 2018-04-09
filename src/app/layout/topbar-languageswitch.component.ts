import * as _ from 'lodash';

import { ChangeUserLanguageDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';

import { AppComponentBase } from '@shared/app-component-base';

@Component({
  templateUrl: './topbar-languageswitch.component.html',
  selector: 'app-topbar-languageswitch',
  encapsulation: ViewEncapsulation.Emulated
})
export class TopBarLanguageSwitchComponent extends AppComponentBase implements OnInit {

  languages: abp.localization.ILanguageInfo[];
  currentLanguage: abp.localization.ILanguageInfo;

  constructor(
    injector: Injector,
    private _userService: UserServiceProxy
  ) {
    super(injector);
  }

  ngOnInit() {
    this.languages = _.filter(this.localization.languages, l => !l.isDisabled && l.name !== this.localization.currentLanguage.name);
    this.currentLanguage = this.localization.currentLanguage;
  }

  changeLanguage(languageName: string): void {
    const input = new ChangeUserLanguageDto();
    input.languageName = languageName;

    this._userService.changeLanguage(input).subscribe(() => {
      abp.utils.setCookieValue(
        'Abp.Localization.CultureName',
        languageName,
        new Date(new Date().getTime() + 5 * 365 * 86400000), // 5 year
        abp.appPath
      );

      window.location.reload();
    });
  }
}
