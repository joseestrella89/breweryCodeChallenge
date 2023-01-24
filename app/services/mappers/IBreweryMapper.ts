import { Brewery } from '@Models/Brewery';
import { BreweryDTO } from '@Services/dto/BreweryDTO';

export default interface IBreweryMapper {
    mapBrewery(breweryDTO: BreweryDTO): Brewery;
}
