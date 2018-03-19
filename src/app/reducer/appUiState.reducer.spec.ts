import * as ui from '../actions/appUiState.actions';

import { getMainMenuVisible, getProfileMenuVisible, getRightPanelVisible, reducer } from './appUiState.reducer'

import { Action } from '@ngrx/store';
import { initialState } from './appUiState.reducer';

describe('App UI state reducers', () => {
    it('should handle initial state', () => {
        const state = reducer(initialState, undefined);
        expect(state.MainMenuVisible).toBeTruthy();
        expect(state.ProfileMenuVisible).toBeFalsy();
        expect(state.RightPanelVisible).toBeFalsy();
    });

    it('should TOGGLERIGHTPANEL', () => {
        const state = reducer(initialState, new ui.ToggleRightPanelAction({ isVisible: false }));
        expect(getRightPanelVisible(state)).toBeTruthy();
    });

    it('should TOGGLEMAINMENU', () => {
        const state = reducer(initialState, new ui.ToggleMainMenuAction({ isVisible: false }));
        expect(getMainMenuVisible(state)).toBeTruthy();
    });

    it('should TOGGLEPROFILE', () => {
        const state = reducer(initialState, new ui.ToggleProfileMenuAction({ isVisible: false }));
        expect(getProfileMenuVisible(state)).toBeTruthy();
    });
});
