import { NavigationContainer } from '@react-navigation/native';
import { AuthenticatedStack } from '@Navigators/AuthenticatedStack';

const AppNavigator = (): JSX.Element => {
    return (
        <NavigationContainer>
            <AuthenticatedStack />
        </NavigationContainer>
    );
};

export default AppNavigator;
