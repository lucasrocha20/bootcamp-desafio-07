import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#000',
      },
    }
  )
);

export default Routes;
