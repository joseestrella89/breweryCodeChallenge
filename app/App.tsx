/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigator from '@Navigators/AppNavigator';

function App(): JSX.Element {
    // const isDarkMode = useColorScheme() === 'dark';

    // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };

    return (
        <AppNavigator />
    );
}

export default App;
