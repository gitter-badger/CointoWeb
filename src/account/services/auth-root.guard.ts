import { map, take } from 'rxjs/operators';

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private store: Store<fromAuth.State>) { }

  canActivate(): Observable<boolean> {
    return Observable.of(true);
    // return this.store.pipe(
    //   select(fromAuth.getLoggedIn),
    //   map(authed => {
    //     if (!authed) {
    //       this.store.dispatch(new Auth.LoginRedirect());
    //       return false;
    //     }

    //     return true;
    //   }),
    //   take(1)
    // );
  }
}
