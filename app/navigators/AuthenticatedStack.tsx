import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BreweriesScreen from '@Screens/Breweries/BreweriesScreen';
import BreweryScreen from '@Screens/Brewery/BreweryScreen';
import { RouteNames } from '@Navigators/RouteNames';

export type NavigatorParamsList = {
    [RouteNames.Breweries]: Record<string, never>;
    [RouteNames.Brewery]: {
        breweryId: string;
    };
};

const Stack = createNativeStackNavigator<NavigatorParamsList>();

export const AuthenticatedStack = (): JSX.Element => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteNames.Breweries} component={BreweriesScreen} />
            <Stack.Screen name={RouteNames.Brewery} component={BreweryScreen} />
        </Stack.Navigator>
    );
};
