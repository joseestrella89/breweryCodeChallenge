import INetworkService from "@Services/INetworkService";
import { API_URL } from "config/envs";
import IBreweryRepository, { BreweryListResponse, SearchByParams, FilterByParams } from "@Services/repositories/IBreweryRepository";

export default class BreweryRepositoryNetwork implements IBreweryRepository {
    networkService: INetworkService;

    constructor(networkService: INetworkService) {
        this.networkService = networkService;
    }

    async searchByKeyword(params: SearchByParams): Promise<BreweryListResponse> {
        const response = this.networkService.get<BreweryListResponse>(`${API_URL}/breweries/search?query=${params.query}&per_page=${params.perPage}`);
        console.log(response);
        return {
            breweries: []
        };
    }

    async filterBy(params: FilterByParams): Promise<BreweryListResponse> {
        return {
            breweries: []
        };
    }
}