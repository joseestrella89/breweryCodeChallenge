import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamsList } from '@Navigators/AuthenticatedStack';

import { RouteNames } from '@Navigators/RouteNames';
import { Container } from '@Components/Container';

import { BreweriesPaginated } from '@Screens/Breweries/components/BreweriesPaginated';
import { BreweriesSearch } from '@Screens/Breweries/components/BreweriesSearch';


interface Props extends NativeStackScreenProps<NavigatorParamsList, RouteNames.Breweries> {};

const BreweriesScreen = (props: Props) => {
    const handleOnSelectedItem = (id: string) => {
        props.navigation.navigate(RouteNames.Brewery, {
            breweryId: id
        })
    };

    return (
        <Container>
            <BreweriesSearch
                onSelectedItem={handleOnSelectedItem}
            />
            <BreweriesPaginated
                onSelectedItem={handleOnSelectedItem}
            />
        </Container>
    );
};

export default BreweriesScreen;