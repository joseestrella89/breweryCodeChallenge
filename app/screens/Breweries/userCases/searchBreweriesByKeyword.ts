import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import NetworkServiceFetch from '@Services/network/NetworkServiceFetch';
import { SearchByParams } from '@Services/repositories/IBreweryRepository';
import { Brewery } from '@Models/Brewery';

export async function searchBreweryiesByKeyword (params: SearchByParams): Promise<Brewery[]> {
    const repo = new BreweryRepositoryNetwork(new NetworkServiceFetch());
    const { breweries } = await repo.searchByKeyword({
        query: params.query,
        perPage: params.perPage,
    });
    return breweries;
};
