import { Action } from '@ngrx/store';
import { type } from '@shared/utils/type';

export enum AppUiStateActionTypes {
  TOGGLERIGHTPANEL = '[UI] toggle right panel',
  TOGGLEMAINMENU = '[UI] toggle main menu',
  TOGGLEPROFILEMENU = '[UI] toggle profile'
}

export class ToggleRightPanelAction implements Action {
  type = AppUiStateActionTypes.TOGGLERIGHTPANEL;

  constructor(private payload: { isVisible: boolean }) {}
}

export class ToggleMainMenuAction implements Action {
  type = AppUiStateActionTypes.TOGGLEMAINMENU;

  constructor(private payload: { isVisible: boolean }) {}
}

export class ToggleProfileMenuAction implements Action {
  type = AppUiStateActionTypes.TOGGLEPROFILEMENU;

  constructor(private payload: { isVisible: boolean }) {}
}

export type AppUiStateActions =
  | ToggleRightPanelAction
  | ToggleMainMenuAction
  | ToggleProfileMenuAction;
