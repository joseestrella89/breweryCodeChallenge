import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigator from '@Navigators/AppNavigator';
import { Provider } from 'react-redux';
import { store } from '@Redux/store';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator />
            </ApplicationProvider>
        </Provider>
    );
}

export default App;
