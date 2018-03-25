import { Action, State, StateContext } from '@ngxs/store';
import { NavigationExtras, Router } from '@angular/router';

import { Location } from '@angular/common';

export class RouterStateModel {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
}

export class Go {
    constructor(public readonly payload: RouterStateModel) { }
}

export class Back { }
export class Forward { }

@State<RouterStateModel>({
    name: 'router'
})
export class RouterState {
    constructor(private router: Router, private location: Location) { }

    @Action(Go)
    go(sc: StateContext<RouterStateModel>, action: Go) {
        const { path, query: queryParams, extras } = action.payload;
        this.router.navigate(path, { queryParams, ...extras });
    }
    @Action(Back)
    back(sc: StateContext<RouterStateModel>) {
        this.location.back();
    }

    @Action(Forward)
    forward(sc: StateContext<RouterStateModel>) {
        this.location.forward();
    }
}
