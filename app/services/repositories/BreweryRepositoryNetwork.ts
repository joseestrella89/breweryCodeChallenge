import INetworkService from '@Services/network/INetworkService';
import Envs from '@Config/envs';
import IBreweryRepository, { BreweryListResponse, SearchByParams, FilterByParams } from '@Services/repositories/IBreweryRepository';
import IBreweryMapper from '@Services/mappers/IBreweryMapper';
import BreweryMapper from '@Services/mappers/BreweryMapper';
import { BreweryDTO } from '@Services/dto/BreweryDTO';

export default class BreweryRepositoryNetwork implements IBreweryRepository {
    networkService: INetworkService;
    breweryMapper: IBreweryMapper;

    constructor(networkService: INetworkService) {
        this.networkService = networkService;
        this.breweryMapper = new BreweryMapper();
    }

    async searchByKeyword(params: SearchByParams): Promise<BreweryListResponse> {
        const breweriesDTO = await this.networkService.get<BreweryDTO[]>(`${Envs.API_URL}/breweries/autocomplete?query=${params.query}&per_page=${params.perPage}`);
        const breweries = breweriesDTO.map((breweryDTO: BreweryDTO) => this.breweryMapper.mapBrewery(breweryDTO));
        return { breweries };
    }

    async filterBy(params: FilterByParams): Promise<BreweryListResponse> {
        const url = `${Envs.API_URL}/breweries?by_name=${params.name}&by_city=${params.city}&per_page=${params.perPage}&meta`
        const breweriesDTO = await this.networkService.get<BreweryDTO[]>(url);
        console.log(breweriesDTO)
        const breweries = breweriesDTO.map((breweryDTO: BreweryDTO) => this.breweryMapper.mapBrewery(breweryDTO));
        return { breweries };
    }
}