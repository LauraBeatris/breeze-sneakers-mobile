import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';
import navigation from './services/navigation';

const App = () => (
    <Provider store={store}>
        <Routes
            ref={navigatorRef => {
                navigation.setTopLevelNavigator(navigatorRef);
            }}
        />
    </Provider>
);

export default App;
