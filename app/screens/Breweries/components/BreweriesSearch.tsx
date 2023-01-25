import React, { useState } from 'react';

import { SearchDropdown, SIZE } from '@Components/SearchDropdown';
import { Brewery } from '@Models/Brewery';
import { useDispatch } from 'react-redux';
import { actionSearchByKeyword } from '@Redux/actions/breweriesActions';
import { useAppSelector } from '@Hooks/useAppSelector';
import { BREWERIES } from '@Constants/strings';
import { BREWERIES_SEARCH_PAGINATION_SIZE } from '@Constants/values';

interface Props {
    onSelectedItem: (id: string) => void;
}

export const BreweriesSearch = ({ onSelectedItem }: Props) => {
    const dispatch = useDispatch();
    const { breweriesSuggestions } = useAppSelector(({ BreweryReducer }) => BreweryReducer);

    const [textToFind, setTextToFind] = useState('');
    const findBreweries = (query: string) => {
        setTextToFind(query);
        dispatch(actionSearchByKeyword({ query: textToFind, perPage: BREWERIES_SEARCH_PAGINATION_SIZE }));
    };

    const handleOnSelectedItem = (brewery: Brewery) => {
        onSelectedItem(brewery.id);
    };

    return (
        <SearchDropdown
            placeholder={BREWERIES.FIND_BY_KEYWORD}
            items={breweriesSuggestions}
            value={textToFind}
            size={SIZE.large}
            onChangeText={findBreweries}
            onSelect={handleOnSelectedItem}
        />
    );
};
