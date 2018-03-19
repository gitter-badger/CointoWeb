import { Component, Input, OnInit } from '@angular/core';

import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit {
  @Input() reset: boolean;

  model: any[];

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.model = [
      { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
      {
        label: 'Themes',
        icon: 'palette',
        badge: '6',
        items: [
          {
            label: 'Indigo - Pink',
            icon: 'brush',
            command: event => {
              this.changeTheme('indigo');
            }
          },
          {
            label: 'Brown - Green',
            icon: 'brush',
            command: event => {
              this.changeTheme('brown');
            }
          },
          {
            label: 'Blue - Amber',
            icon: 'brush',
            command: event => {
              this.changeTheme('blue');
            }
          },
          {
            label: 'Blue Grey - Green',
            icon: 'brush',
            command: event => {
              this.changeTheme('blue-grey');
            }
          },
          {
            label: 'Dark - Blue',
            icon: 'brush',
            command: event => {
              this.changeTheme('dark-blue');
            }
          },
          {
            label: 'Dark - Green',
            icon: 'brush',
            command: event => {
              this.changeTheme('dark-green');
            }
          },
          {
            label: 'Green - Yellow',
            icon: 'brush',
            command: event => {
              this.changeTheme('green');
            }
          },
          {
            label: 'Purple - Cyan',
            icon: 'brush',
            command: event => {
              this.changeTheme('purple-cyan');
            }
          },
          {
            label: 'Purple - Amber',
            icon: 'brush',
            command: event => {
              this.changeTheme('purple-amber');
            }
          },
          {
            label: 'Teal - Lime',
            icon: 'brush',
            command: event => {
              this.changeTheme('teal');
            }
          },
          {
            label: 'Cyan - Amber',
            icon: 'brush',
            command: event => {
              this.changeTheme('cyan');
            }
          },
          {
            label: 'Grey - Deep Orange',
            icon: 'brush',
            command: event => {
              this.changeTheme('grey');
            }
          }
        ]
      },
      {
        label: 'Customization',
        icon: 'settings_application'
      },
      {
        label: 'Components',
        icon: 'list',
        badge: '2',
        badgeStyleClass: 'teal-badge',
        items: [
          {
            label: 'Sample Page',
            icon: 'desktop_mac',
            routerLink: ['/sample']
          },
          { label: 'Forms', icon: 'input', routerLink: ['/forms'] },
          { label: 'Data', icon: 'grid_on', routerLink: ['/data'] },
          { label: 'Panels', icon: 'content_paste', routerLink: ['/panels'] },
          {
            label: 'Overlays',
            icon: 'content_copy',
            routerLink: ['/overlays']
          },
          { label: 'Menus', icon: 'menu', routerLink: ['/menus'] },
          { label: 'Messages', icon: 'message', routerLink: ['/messages'] },
          { label: 'Charts', icon: 'insert_chart', routerLink: ['/charts'] },
          { label: 'File', icon: 'attach_file', routerLink: ['/file'] },
          { label: 'Misc', icon: 'toys', routerLink: ['/misc'] }
        ]
      },
      {
        label: 'Template Pages',
        icon: 'get_app',
        items: [
          {
            label: 'Empty Page',
            icon: 'hourglass_empty',
            routerLink: ['/empty']
          },
          {
            label: 'Landing Page',
            icon: 'flight_land',
            url: 'assets/pages/landing.html',
            target: '_blank'
          },
          {
            label: 'Login Page',
            icon: 'verified_user',
            url: 'assets/pages/login.html',
            target: '_blank'
          },
          {
            label: 'Error Page',
            icon: 'error',
            url: 'assets/pages/error.html',
            target: '_blank'
          },
          {
            label: '404 Page',
            icon: 'error_outline',
            url: 'assets/pages/404.html',
            target: '_blank'
          },
          {
            label: 'Access Denied Page',
            icon: 'security',
            url: 'assets/pages/access.html',
            target: '_blank'
          }
        ]
      },
      {
        label: 'Menu Hierarchy',
        icon: 'menu',
        items: [
          {
            label: 'Submenu 1',
            icon: 'subject',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'subject',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'subject' },
                  { label: 'Submenu 1.1.2', icon: 'subject' },
                  { label: 'Submenu 1.1.3', icon: 'subject' }
                ]
              },
              {
                label: 'Submenu 1.2',
                icon: 'subject',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'subject' },
                  { label: 'Submenu 1.2.2', icon: 'subject' }
                ]
              }
            ]
          },
          {
            label: 'Submenu 2',
            icon: 'subject',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'subject',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'subject' },
                  { label: 'Submenu 2.1.2', icon: 'subject' },
                  { label: 'Submenu 2.1.3', icon: 'subject' }
                ]
              },
              {
                label: 'Submenu 2.2',
                icon: 'subject',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'subject' },
                  { label: 'Submenu 2.2.2', icon: 'subject' }
                ]
              }
            ]
          }
        ]
      },
      { label: 'Utils', icon: 'build', routerLink: ['/utils'] },
      {
        label: 'Documentation',
        icon: 'find_in_page',
        routerLink: ['/documentation']
      }
    ];
  }

  changeTheme(theme) {
    const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById(
      'theme-css'
    );
    const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById(
      'layout-css'
    );

    themeLink.href = 'assets/theme/theme-' + theme + '.css';
    layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
  }
}
