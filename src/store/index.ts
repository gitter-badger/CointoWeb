import * as fromRouter from '@ngrx/router-store';
import * as fromUi from '../app/reducer/appUiState.reducer';

import {
  ActionReducerMap,
  MetaReducer,
  State,
  combineReducers,
  compose,
  createSelector
} from '@ngrx/store';

import { RouterStateUrl } from '@shared/utils/utils';
import { environment } from '../environments/environment';
import { state } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

export interface AppState {
  ui: fromUi.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.reducer,
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeLogger(), storeFreeze]
  : [];

export const getState = (appState: AppState) => {
  return appState;
};

export const getUiState = (appState: AppState) => {
  return appState.ui;
};
export const getUiRightPanelVisible = createSelector(
  getUiState,
  fromUi.getRightPanelVisible
);

export const getUiMainMenuVisible = createSelector(
  getUiState,
  fromUi.getMainMenuVisible
);

export const getUiProfileMenuVisible = createSelector(
  getUiState,
  fromUi.getProfileMenuVisible
);
