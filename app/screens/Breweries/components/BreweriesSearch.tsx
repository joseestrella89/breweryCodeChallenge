import React, { useState } from 'react';

import { SearchDropdown, SIZE } from '@Components/SearchDropdown';
import { Brewery } from '@Models/Brewery';
import { searchBreweryiesByKeyword } from '@Screens/Breweries/userCases/searchBreweriesByKeyword';

interface Props {
    onSelectedItem: (id: string) => void;
}

export const BreweriesSearch = ({ onSelectedItem }: Props) => {
    // let timeout = null;
    // const { isLoading, data: breweries = [], mutate } = useMutation((params: SearchByParams) => {
    //     return searchBreweryiesByKeyword(params)
    // });

    const [textToFind, setTextToFind] = useState('');
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    // const findBreweries = (query: string) => {
    //     setTextToFind(query);
    //     // debounce(callDeubu(), 300);
    //     mutate({ query: query, perPage: 15 })
    // };
    const findBreweries = (query: string) => {
        setTextToFind(query);
        searchBreweryiesByKeyword({ query: textToFind, perPage: 15 }).then((breweries) => {
            setBreweries(breweries)
        });
    };

    const handleOnSelectedItem = (brewery: Brewery) => {
        onSelectedItem(brewery.id);
    };

    return (
        <SearchDropdown
            placeholder='Find'
            items={breweries}
            value={textToFind}
            size={SIZE.large}
            onChangeText={findBreweries}
            onSelect={handleOnSelectedItem}
        />
    );
};
