import { Action, Selector, State } from '@ngxs/store';

import { StateContext } from '@ngxs/store';

export class ToggleMainMenu {
    constructor(public readonly payload?: boolean) { }
}

export class AppUiStateModel {
    mainMenuVisible: boolean;
}

@State<AppUiStateModel>({
    name: 'appUiState',
    defaults: {
        mainMenuVisible: true
    }
})
export class AppUiState {
    @Selector()
    static rightPanelVisible(state: AppUiStateModel): boolean {
        return state.mainMenuVisible;
    }

    @Action(ToggleMainMenu)
    toggleRightPanel({ getState, patchState }: StateContext<AppUiStateModel>, { payload }: ToggleMainMenu) {
        const state = getState();
        patchState({
            mainMenuVisible: !payload
        });
    }
}
