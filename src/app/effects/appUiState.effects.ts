import { ToggleRightPanelAction } from './../actions/appUiState.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import * as ui from '../actions/appUiState.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'store';

@Injectable()
export class AppUiStateEffects {
  // @Effect()
  // toggleRightPanel$ = this._actions$
  //   .ofType(ui.AppUiStateActionTypes.TOGGLERIGHTPANEL)
  //   .map(state => {
  //     return new ToggleRightPanelAction((<any>state).payload);
  //   });
  // // .catch(() => Observable.of(new coinList.LoadCoinListFailedAction()));

  constructor(private _actions$: Actions, private _store$: Store<AppState>) {}
}
