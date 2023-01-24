import React, { useEffect, useState } from 'react';

import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import NetworkServiceFetch from '@Services/network/NetworkServiceFetch';
import { Brewery } from '@Models/Brewery';
import { ListItems } from '@Components/ListItems';
import { BreweryItem } from '@Screens/Breweries/components/BreweryItem';
import { BreweriesFilter } from '@Screens/Breweries/components/BreweriesFilter';

interface Props {
    onSelectedItem: (id: string) => void;
}

export const BreweriesPaginated = ({ onSelectedItem }: Props) => {
    const [breweriesPaginated, setBreweriesPaginated] = useState<Brewery[]>([]);
    useEffect(() => {
        const repo = new BreweryRepositoryNetwork(new NetworkServiceFetch());
        repo.filterBy({ name: '', city: '', perPage: 10 })
            .then((response) => {
                setBreweriesPaginated(response.breweries);
            })
    }, []);

    const onSelect = (brewery: Brewery) => {
        onSelectedItem(brewery.id);
    };

    const handleGoUrl = (url: string) => {

    }

    const renderItems = ({ item, index}) => (
        <BreweryItem
            key={`${index}-breweryItem`}
            brewery={item}
            onPress={onSelect}
            goUrl={handleGoUrl}
        />
    );

    const handleOnFilter = () => {
        
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