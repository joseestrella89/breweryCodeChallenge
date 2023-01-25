import React, { useState } from 'react';
import { View } from 'react-native';

import { Text, CATEGORY } from '@Components/Text';
import { Input } from '@Components/Input';
import { BREWERIES } from '@Constants/strings';
import Styles from '@Screens/Breweries/styles/BreweriesFilterStyle';
import { Button, TYPE_BUTTON, SIZE_BUTTON } from '@Components/Button';

interface Props {
    onFilter: (name: string, city: string) => void;
}

export const BreweriesFilter = ({ onFilter }: Props) => {
    const [filterByName, setFilterByName] = useState<string>('');
    const [filterByCity, setFilterByCity] = useState<string>('');

    const onChangedFilterName = (value: string) => {
        setFilterByName(value);
    };

    const onChangedFilterCity = (value: string) => {
        setFilterByCity(value);
    };

    const handleOnFilter = () => {
        onFilter(filterByName, filterByCity);
    };

    return (
        <View style={Styles.container}>
            <Text category={CATEGORY.p1}>{BREWERIES.FILTER_BY}</Text>
            <Input
                placeholder={BREWERIES.FILTER_BY_NAME}
                onChangeText={onChangedFilterName}
                value={filterByName}
                styles={Styles.input}
            />
            <Input
                placeholder={BREWERIES.FILTER_BY_CITY}
                onChangeText={onChangedFilterCity}
                value={filterByCity}
                styles={Styles.input}
            />
            <Button
                type={TYPE_BUTTON.clear}
                size={SIZE_BUTTON.small}
                onPress={handleOnFilter}
            >
                <Text category={CATEGORY.p1}>{BREWERIES.GO}</Text>
            </Button>
        </View>
    );
};