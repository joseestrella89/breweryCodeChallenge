const getBreweryById = (id: string) => ({
    id,
    name: 'Brewery Test',
    breweryType: 'local',
    street: 'Av Nothing',
    address2: '',
    address3: '',
    city: 'Gotham City',
    state: 'New Jersey',
    countyProvince: 'Gotham City',
    postalCode: '777',
    country: 'United States',
    longitude: '-85.54',
    latitude: '17.85',
    phone: '111 111 111',
    websiteUrl: 'https://batman.com',
    updatedAt: '2012-10-15T21:26:17Z',
    createdAt: '2012-10-15T21:26:17Z'
});

const getBreweryDTOById = (id: string) => ({
    id,
    name: 'Brewery Test',
    brewery_type: 'local',
    street: 'Av Nothing',
    address_2: '',
    address_3: '',
    city: 'Gotham City',
    state: 'New Jersey',
    county_province: 'Gotham City',
    postal_code: '777',
    country: 'United States',
    longitude: '-85.54',
    latitude: '17.85',
    phone: '111 111 111',
    website_url: 'https://batman.com',
    updated_at: '2012-10-15T21:26:17Z',
    created_at: '2012-10-15T21:26:17Z',
});

export { getBreweryById, getBreweryDTOById };
