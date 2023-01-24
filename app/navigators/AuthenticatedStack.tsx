import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BreweriesScreen from '@Screens/Breweries/BreweriesScreen';
import BreweryScreen from '@Screens/Brewery/BreweryScreen';

const Stack = createNativeStackNavigator();

export const AuthenticatedStack = (): JSX.Element => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Breweries"
                component={BreweriesScreen}
            />
            <Stack.Screen
                name="Brewery Item"
                component={BreweryScreen}
            />
        </Stack.Navigator>
    );
};
