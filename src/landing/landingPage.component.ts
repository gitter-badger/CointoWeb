import * as _ from 'lodash';

import {
  Component,
  ElementRef,
  Injector,
  OnInit,
  Renderer,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { AppComponentBase } from '@shared/app-component-base';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';

@Component({
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LandingPageComponent extends AppComponentBase implements OnInit {
  // @ViewChild('menu') menu: ElementRef;
  // @ViewChild('ulMenu') ulMenu: ElementRef;
  // items: MenuItem[];
  // currentLanguage: abp.localization.ILanguageInfo;

  name = 'Landing Page';
  constructor(
    private render: Renderer,
    injector: Injector,
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    super(injector);
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'cointo-logo',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logo/logo.svg'
      )
    );
  }

  ngOnInit() {
    // this.currentLanguage = this.localization.currentLanguage;
    // const languages = _.filter(this.localization.languages, l => {
    //   return !l.isDisabled && this.currentLanguage.name !== l.name;
    // });
    // this.items = languages.map(lang => {
    //   const item = {
    //     label: lang.displayName,
    //     icon: lang.icon
    //   };
    //   return item;
    // });
  }

  // menuClicked(event: MouseEvent): void {
  //   const nativeMenu = this.menu.nativeElement;

  //   if(nativeMenu.classList.contains('lmenu-active')) {
  //   nativeMenu.classList.add('fadeOutUp');
  //   this.render.setElementStyle(this.ulMenu.nativeElement, 'display', 'none');
  //   setTimeout(function () {
  //     nativeMenu.classList.remove('fadeOutUp');
  //     nativeMenu.classList.remove('fadeInDown');
  //     nativeMenu.classList.remove('lmenu-active');
  //   }, 500);
  // } else {
  //   nativeMenu.classList.add('lmenu-active');
  //   nativeMenu.classList.add('fadeInDown');
  //   this.render.setElementStyle(
  //     this.ulMenu.nativeElement,
  //     'display',
  //     'block'
  //   );
  // }
  // event.preventDefault();
  //   }
}
