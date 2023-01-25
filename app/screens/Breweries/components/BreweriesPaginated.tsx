import React, { useEffect, useState } from 'react';

import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import NetworkServiceFetch from '@Services/network/NetworkServiceFetch';
import { Brewery } from '@Models/Brewery';
import { ListItems } from '@Components/ListItems';
import { BreweryItem } from '@Screens/Breweries/components/BreweryItem';
import { BreweriesFilter } from '@Screens/Breweries/components/BreweriesFilter';
import { openURL } from '@Services/deeplinking/browser';
import { BREWERIES_PAGINATION_SIZE } from '@Constants/values';

interface Props {
    onSelectedItem: (id: string) => void;
}

export const BreweriesPaginated = ({ onSelectedItem }: Props) => {
    const [breweriesPaginated, setBreweriesPaginated] = useState<Brewery[]>([]);
    const [filterByName, setFilterByName] = useState<string>('');
    const [filterByCity, setFilterByCity] = useState<string>('');
    const repo = new BreweryRepositoryNetwork(new NetworkServiceFetch());

    useEffect(() => {
        repo.filterBy({ name: '', city: '', perPage: BREWERIES_PAGINATION_SIZE })
            .then((response) => {
                setBreweriesPaginated(response.breweries);
            })
    }, []);

    const onSelect = (brewery: Brewery) => {
        onSelectedItem(brewery.id);
    };

    const handleGoUrl = (url: string) => {
        openURL(url);
    }

    const renderItems = ({ item, index}) => (
        <BreweryItem
            key={`${index}-breweryItem`}
            brewery={item}
            onPress={onSelect}
            goUrl={handleGoUrl}
        />
    );

    const handleOnFilter = (name: string, city: string) => {
        repo.filterBy({ name, city, perPage: BREWERIES_PAGINATION_SIZE })
            .then((response) => {
                setBreweriesPaginated(response.breweries);
                setFilterByName(name)
                setFilterByCity(city)
            })
    };

    return (
        <>  
            <BreweriesFilter
                onFilter={handleOnFilter}
            />
            <ListItems
                items={breweriesPaginated}
                renderItem={renderItems}
            />
        </>
    );
};