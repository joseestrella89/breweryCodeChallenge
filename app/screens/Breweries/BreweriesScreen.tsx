import React, { useEffect, useState } from 'react';

import { Container } from '@Components/Container';
import { SearchDropdown, SIZE } from '@Components/SearchDropdown';

import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import NetworkServiceFetch from '@Services/network/NetworkServiceFetch';
import { Brewery } from '@Models/Brewery';
import { BreweryItem } from './components/BreweryItem';
import { BreweriesPaginated } from '@Screens/Breweries/components/BreweriesPaginated';

const BreweriesScreen = (): JSX.Element => {
    const [textToFind, setTextToFind] = useState('');
    const [breweriesSearch, setBreweriesSearch] = useState<Brewery[]>([]);
    const [breweriesPaginated, setBreweriesPaginated] = useState<Brewery[]>([]);
    useEffect(() => {
        const repo = new BreweryRepositoryNetwork(new NetworkServiceFetch());
        // repo.filterBy({ name: '', city: '', perPage: 10 })
        //     .then((response) => {
        //         setBreweriesPaginated(response.breweries);
        //     })
        // repo.searchByKeyword({ query: 'dog',  perPage: 10 })
        //     .then((response) => {
        //         setBreweriesSearch(response.breweries);
        //     })
    }, []);

    const findBreweries = (query: string) => {
        setTextToFind(query);
    };

    const onSelectedItem = (id: string) => {
    };

    const onSelect = (brewery: Brewery) => {
    };

    return (
        <Container>
            <SearchDropdown
                placeholder='Find'
                items={breweriesSearch}
                value={textToFind}
                size={SIZE.large}
                onChangeText={findBreweries}
                onSelect={onSelect}
            />
            <BreweriesPaginated
                onSelectedItem={onSelectedItem}
            />
        </Container>
    );
};

export default BreweriesScreen;