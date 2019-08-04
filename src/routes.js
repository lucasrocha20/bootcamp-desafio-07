import { createAppContainer, createStackNavigator } from 'react-navigation';

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
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
