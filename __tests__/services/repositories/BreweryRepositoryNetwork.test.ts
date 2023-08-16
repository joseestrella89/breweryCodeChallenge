import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import { getBreweryById, getBreweryDTOById } from '@Mocks/brewery.mock';
import NetworkServiceFetch from '@Services/network/NetworkServiceFetch';

let repository;
let networkService;

describe('BreweryRepositoryNetwork', () => {
    beforeEach(() => {
        networkService = new NetworkServiceFetch();
        repository = new BreweryRepositoryNetwork(networkService);
    });

    it('When getBreweryById is called then responds a brewery model', async () => {
        const breweryTest = getBreweryById('1');
        const breweryDTO = getBreweryDTOById('1');

        const mockGetService = jest.fn(() => breweryDTO);
        networkService.get = mockGetService;
        const brewery = await repository.getBreweryById('1');

        expect(brewery).toEqual(breweryTest);
        expect(mockGetService).toBeCalledTimes(1);
    });

    it('When filterBy is called and the service has results then responds with a brewery list', async () => {
        const breweryTest = getBreweryById('1');
        const breweryDTO = getBreweryDTOById('1');

        const mockGetService = jest.fn(() => [breweryDTO]);
        networkService.get = mockGetService;
        const brewery = await repository.filterBy({
            city: 'some',
            name: '',
            perPage: 10,
        });

        expect(brewery).toEqual({ breweries: [breweryTest] });
        expect(mockGetService).toBeCalledTimes(1);
    });

    it('When filterBy is called and the service has not results then responds with an empty list', async () => {
        const mockGetService = jest.fn(() => []);
        networkService.get = mockGetService;
        const brewery = await repository.filterBy({
            city: 'some',
            name: '',
            perPage: 10,
        });

        expect(brewery).toEqual({ breweries: [] });
        expect(mockGetService).toBeCalledTimes(1);
    });

    it('When searchByKeyword is called and the service has results then responds with a brewery list', async () => {
        const breweryTest = getBreweryById('1');
        const breweryDTO = getBreweryDTOById('1');

        const mockGetService = jest.fn(() => [breweryDTO]);
        networkService.get = mockGetService;
        const brewery = await repository.searchByKeyword({
            query: 'some',
            perPage: 10,
        });

        expect(brewery).toEqual({ breweries: [breweryTest] });
        expect(mockGetService).toBeCalledTimes(1);
    });

    it('When searchByKeyword is called and the service has not results then responds with an empty list', async () => {
        const mockGetService = jest.fn(() => []);
        networkService.get = mockGetService;
        const brewery = await repository.searchByKeyword({
            query: 'sofsdfsdme',
            perPage: 10,
        });

        expect(brewery).toEqual({ breweries: [] });
        expect(mockGetService).toBeCalledTimes(1);
    });
});
