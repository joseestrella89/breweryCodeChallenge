import IBreweryMapper from '@Services/mappers/IBreweryMapper';
import { Brewery } from '@Models/Brewery';
import { BreweryDTO } from '@Services/dto/BreweryDTO';

export default class BreweryMapper implements IBreweryMapper {
    mapBrewery(breweryDTO: BreweryDTO): Brewery {
        return {
            id: breweryDTO.id,
            name: breweryDTO.name,
            breweryType: breweryDTO.brewery_type,
            street: breweryDTO.street,
            address2: breweryDTO.address_2,
            address3: breweryDTO.address_3,
            city: breweryDTO.city,
            state: breweryDTO.state,
            countyProvince: breweryDTO.county_province,
            postalCode: breweryDTO.postal_code,
            country: breweryDTO.country,
            longitude: breweryDTO.longitude,
            latitude: breweryDTO.latitude,
            phone: breweryDTO.phone,
            websiteUrl: breweryDTO.website_url,
            updatedAt: breweryDTO.updated_at,
            createdAt: breweryDTO.created_at,
        };
    }
}
