import { ofType } from 'redux-observable';
import {
    catchError,
    from,
    switchMap,
    Observable,
    of,
} from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import {
    actionSearchByKeywordSuccess,
    actionSearchByKeywordError,
    actionFilterBreweriesSuccess,
    actionFilterBreweriesError,
} from '@Redux/actions/breweriesActions';
import BreweriesActionsType from '@Redux/actionTypes/breweriesActionTypes';
import {
    SearchByKeywordRequestAction,
    FilterBreweriesRequestAction,
} from '@Redux/interfaces/breweriesInterfaces';
import ServicesEpic from '@Redux/interfaces/servicesEpic';
import { FilterByParams, SearchByParams } from '@Services/repositories/IBreweryRepository';

export const searchByKewordEpic = (action$: Observable<any>, $state: any, { breweryRepository }: ServicesEpic) => action$.pipe(
    ofType(BreweriesActionsType.REQUEST_SEARCH_BY_KEYWORD),
    debounceTime(400),
    map((action: SearchByKeywordRequestAction) => action.payload),
    switchMap((payload: SearchByParams) => from(breweryRepository.searchByKeyword(payload))
        .pipe(
            map((response) => actionSearchByKeywordSuccess(response)),
            catchError(() => of(actionSearchByKeywordError()))
        ),
    ),
);

export const filterBreweriesEpic = (action$: Observable<any>, $state: any, { breweryRepository }: ServicesEpic) => action$.pipe(
    ofType(BreweriesActionsType.REQUEST_FILTER_BREWERIES),
    map((action: FilterBreweriesRequestAction) => action.payload),
    switchMap((payload: FilterByParams) => from(breweryRepository.filterBy(payload))
        .pipe(
            map((response) => actionFilterBreweriesSuccess(response)),
            catchError(() => of(actionFilterBreweriesError()))
        ),
    ),
);

export default [
    filterBreweriesEpic,
    searchByKewordEpic,
];
