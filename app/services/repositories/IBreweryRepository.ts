import { Brewery } from '@Models/Brewery'

export interface BreweryListResponse {
    breweries: Brewery[];
}

export interface SearchByParams {
    query: string;
    perPage: number;
}

export interface FilterByParams {
    city: string;
    name: string;
    perPage: number;
}

export default interface IBreweryRepository {
    filterBy(params: FilterByParams): Promise<BreweryListResponse>;
    getBreweryById(id: string): Promise<Brewery>;
    searchByKeyword(params: SearchByParams): Promise<BreweryListResponse>;
}
