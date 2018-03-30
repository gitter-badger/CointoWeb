import * as _ from 'lodash';

import { Action, Selector, State } from '@ngxs/store';
import { CountriesServiceProxy, LanguageDto } from '@shared/service-proxies/service-proxies';
import { CountryDto, LanguagesServiceProxy, ListResultDtoOfCountryDto, ListResultDtoOfLanguageDto } from '../../shared/service-proxies/service-proxies';

import { LoadableState } from '@shared/store/loadableState.state';
import { StateContext } from '@ngxs/store';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

export class LoadLanguages { }

export class LoadLanguagesSuccess {
    constructor(readonly payload: LanguageDto[]) { }
}

export class LoadLanguagesFail {
    constructor(readonly payload: any) { }
}

export class LoadCountries { }

export class LoadCountriesSuccess {
    constructor(readonly payload: CountryDto[]) { }
}

export class LoadCountriesFail {
    constructor(readonly payload: any) { }
}


export class MasterDataStateModel implements LoadableState {
    loading: boolean;
    languages: LanguageDto[];
    countries: CountryDto[];
}

@State<MasterDataStateModel>({
    name: 'masterdata',
    defaults: {
        languages: undefined,
        countries: undefined,
        loading: false
    }
})
export class MasterDataState {
    @Selector()
    static userSpecificLanguages(state: MasterDataStateModel): LanguageDto[] {
        const result = _.filter(state.languages, (l) => {
            return l.isUserDefined;
        });
        return result;
    }

    constructor(private _languageService: LanguagesServiceProxy, private _countryService: CountriesServiceProxy) { }

    @Action(LoadLanguages)
    loadLanguages({ getState, patchState, dispatch }: StateContext<MasterDataStateModel>) {
        patchState({ loading: true });
        return this._languageService.getAll().pipe(
            tap((langResult: ListResultDtoOfLanguageDto) => {
                setTimeout(() => {
                    dispatch(new LoadLanguagesSuccess(langResult.items))
                }, 0);
            }));
    }

    @Action(LoadCountries)
    loadCountries({ getState, patchState, dispatch }: StateContext<MasterDataStateModel>) {
        patchState({ loading: true });
        return this._countryService.getAll().pipe(
            tap((langResult: ListResultDtoOfCountryDto) => {
                setTimeout(() => {
                    dispatch(new LoadCountriesSuccess(langResult.items))
                }, 0);
            }));
    }

    @Action(LoadLanguagesSuccess)
    loadLanguagesSuccess({ getState, patchState }: StateContext<MasterDataStateModel>, { payload }: LoadLanguagesSuccess) {
        patchState({ loading: false, languages: payload });
    }

    @Action(LoadCountriesSuccess)
    loadCountriessSuccess({ getState, patchState }: StateContext<MasterDataStateModel>, { payload }: LoadCountriesSuccess) {
        patchState({ loading: false, countries: payload });
    }
}
