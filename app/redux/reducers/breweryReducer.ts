import { ActionType, createReducer } from 'typesafe-actions';

import * as BreweriesActions from '@Redux/actions/breweriesActions';
import {
    FilterBreweriesResponseAction,
    SearchByKeywordResponseAction,
} from '@Redux/interfaces/breweriesInterfaces';
import { BreweryState } from '@Redux/interfaces/breweriesInterfaces';

type ActionsType = ActionType<typeof BreweriesActions>;

export const initialState: BreweryState = {
    breweriesSuggestions: [],
    breweriesFiltered: [],
};

export const BreweryReducer = createReducer<BreweryState, ActionsType>(initialState)
    .handleAction(BreweriesActions.actionSearchByKeywordSuccess, (state: BreweryState, { payload }: SearchByKeywordResponseAction): BreweryState => ({
        ...state,
        breweriesSuggestions: payload.breweries,
    }))
    .handleAction(BreweriesActions.actionFilterBreweriesSuccess, (state: BreweryState, { payload }: FilterBreweriesResponseAction): BreweryState => ({
        ...state,
        breweriesFiltered: payload.breweries,
    }));
