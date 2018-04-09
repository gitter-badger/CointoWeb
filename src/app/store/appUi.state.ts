import { Action, Selector, State } from '@ngxs/store';

import { StateContext } from '@ngxs/store';

export class ToggleMainMenu {
    constructor(public readonly payload?: boolean) { }
}

export class ToggleInlineProfile {
    constructor(public readonly payload?: boolean) { }
}

export class AppUiStateModel {
    mainMenuVisible: boolean;
    inlineProfileVisible: boolean;
}

@State<AppUiStateModel>({
    name: 'appUiState',
    defaults: {
        mainMenuVisible: true,
        inlineProfileVisible: false
    }
})
export class AppUiState {
    @Selector()
    static mainMenuVisible(state: AppUiStateModel): boolean {
        return state.mainMenuVisible;
    }

    @Selector()
    static inlineProfileVisible(state: AppUiStateModel): boolean {
        return state.inlineProfileVisible;
    }

    @Action(ToggleInlineProfile)
    toggleInlineProfile({ getState, patchState }: StateContext<AppUiStateModel>, { payload }: ToggleMainMenu) {
        const state = getState();
        patchState({
            inlineProfileVisible: !payload
        });
    }

    @Action(ToggleMainMenu)
    toggleMainMenu({ getState, patchState }: StateContext<AppUiStateModel>, { payload }: ToggleMainMenu) {
        const state = getState();
        patchState({
            mainMenuVisible: !payload
        });
    }
}
