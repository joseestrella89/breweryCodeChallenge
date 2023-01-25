import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import NetworkServiceFetch from '@Services/network/NetworkServiceFetch';
import { Brewery } from '@Models/Brewery';

export async function getBreweryById (id: string): Promise<Brewery> {
    const repo = new BreweryRepositoryNetwork(new NetworkServiceFetch());
    const brewery = await repo.getBreweryById(id);
    return brewery;
};
