import { Brewery } from '@Models/Brewery';
import { BreweryListResponse, FilterByParams, SearchByParams } from '@Services/repositories/IBreweryRepository';

export interface SearchByKeywordError {}

export interface SearchByKeywordRequestAction {
    payload: SearchByParams,
}

export interface FilterBreweriesRequestAction {
    payload: FilterByParams,
}

export interface SearchByKeywordResponseAction {
    payload: BreweryListResponse;
}

export interface FilterBreweriesResponseAction {
    payload: BreweryListResponse;
}

export interface BreweryState {
    breweriesSuggestions: Brewery[];
    breweriesFiltered: Brewery[];
}
