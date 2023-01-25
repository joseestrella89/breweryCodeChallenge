import React, { useEffect, useState } from 'react';

import { Brewery } from '@Models/Brewery';
import { ListItems } from '@Components/ListItems';
import { BreweryItem } from '@Screens/Breweries/components/BreweryItem';
import { BreweriesFilter } from '@Screens/Breweries/components/BreweriesFilter';
import { openURL } from '@Services/deeplinking/browser';
import { BREWERIES_PAGINATION_SIZE } from '@Constants/values';
import { useDispatch } from 'react-redux';
import { actionFilterBreweries } from '@Redux/actions/breweriesActions';
import { useAppSelector } from '@Hooks/useAppSelector';

interface Props {
    onSelectedItem: (id: string) => void;
}

export const BreweriesPaginated = ({ onSelectedItem }: Props) => {
    const dispatch = useDispatch();
    const { breweriesFiltered } = useAppSelector(({ BreweryReducer }) => BreweryReducer);
    const [filterByName, setFilterByName] = useState<string>('');
    const [filterByCity, setFilterByCity] = useState<string>('');

    useEffect(() => {
        dispatch(actionFilterBreweries({ name: '', city: '', perPage: BREWERIES_PAGINATION_SIZE }));
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
        dispatch(actionFilterBreweries({ name, city, perPage: BREWERIES_PAGINATION_SIZE }));
        setFilterByName(name);
        setFilterByCity(city);
    };

    return (
        <>  
            <BreweriesFilter
                onFilter={handleOnFilter}
            />
            <ListItems
                items={breweriesFiltered}
                renderItem={renderItems}
            />
        </>
    );
};