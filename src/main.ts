import 'hammerjs';
import 'moment/min/locales.min';
import 'moment-timezone';

import * as moment from 'moment';

import { ChangeDetectorRef, enableProdMode } from '@angular/core';

import { RootModule } from './root.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => {
    return platformBrowserDynamic().bootstrapModule(RootModule);
};

/* "Hot Module Replacement" is enabled as described on
 * https://medium.com/@beeman/tutorial-enable-hrm-in-angular-cli-apps-1b0d13b80130#.sa87zkloh
 */

if (environment.hmr) {
    if (module['hot']) {
        hmrBootstrap(module, bootstrap); // HMR enabled bootstrap
    } else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
} else {
    bootstrap(); // Regular bootstrap
}
