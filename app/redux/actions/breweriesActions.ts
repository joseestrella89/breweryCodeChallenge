import { createAction } from 'typesafe-actions';

import BreweriesActionsType from '@Redux/actionTypes/breweriesActionTypes';
import { BreweryListResponse, FilterByParams, SearchByParams } from '@Services/repositories/IBreweryRepository';

const actionSearchByKeyword = createAction(
    BreweriesActionsType.REQUEST_SEARCH_BY_KEYWORD,
    (request: SearchByParams) => (request)
)();

const actionSearchByKeywordSuccess = createAction(
    BreweriesActionsType.REDUCER_SEARCH_BY_KEYWORD_SUCCESS,
    (response: BreweryListResponse) => (response),
)();

const actionSearchByKeywordError = createAction(
    BreweriesActionsType.REDUCER_SEARCH_BY_KEYWORD_ERROR,
    () => {}
)();

const actionFilterBreweries = createAction(
    BreweriesActionsType.REQUEST_FILTER_BREWERIES,
    (request: FilterByParams) => (request)
)();

const actionFilterBreweriesSuccess = createAction(
    BreweriesActionsType.REDUCER_FILTER_BREWERIES_SUCCESS,
    (response: BreweryListResponse) => (response),
)();

const actionFilterBreweriesError = createAction(
    BreweriesActionsType.REDUCER_FILTER_BREWERIES_ERROR,
    () => {}
)();

export {
    actionSearchByKeyword,
    actionSearchByKeywordSuccess,
    actionSearchByKeywordError,
    actionFilterBreweries,
    actionFilterBreweriesSuccess,
    actionFilterBreweriesError,
};
