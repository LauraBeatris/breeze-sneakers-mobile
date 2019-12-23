import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Pages
import Main from './pages/Main';
import Home from './pages/Home';
import Cart from './pages/Cart';

// Navigation Header Component
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        background: '#fff',
      },
    }
  )
);

export default Routes;
