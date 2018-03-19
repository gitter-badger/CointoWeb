import * as ui from '../actions/appUiState.actions';

export interface State {
  RightPanelVisible: boolean;
  MainMenuVisible: boolean;
  ProfileMenuVisible: boolean;
}

export const initialState: State = {
  RightPanelVisible: false,
  MainMenuVisible: true,
  ProfileMenuVisible: false
};

export function reducer(
  state = initialState,
  action: ui.AppUiStateActions
): State {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case ui.AppUiStateActionTypes.TOGGLERIGHTPANEL: {
      return Object.assign({}, state, {
        RightPanelVisible: !(<boolean>(<any>action).payload['isVisible'])
      });
    }
    case ui.AppUiStateActionTypes.TOGGLEMAINMENU: {
      return Object.assign({}, state, {
        MainMenuVisible: !(<boolean>(<any>action).payload['isVisible'])
      });
    }
    case ui.AppUiStateActionTypes.TOGGLEPROFILEMENU: {
      return Object.assign({}, state, {
        ProfileMenuVisible: !(<boolean>(<any>action).payload['isVisible'])
      });
    }
    default: {
      return state;
    }
  }
}

export const getRightPanelVisible = (state: State) => {
  return state.RightPanelVisible;
};

export const getMainMenuVisible = (state: State) => {
  return state.MainMenuVisible;
};

export const getProfileMenuVisible = (state: State) => {
  return state.ProfileMenuVisible;
};
