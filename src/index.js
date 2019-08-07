import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import NavigationServices from './services/navigation';

import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes
        ref={navigatorRef => NavigationServices.setNavigator(navigatorRef)}
      />
    </Provider>
  );
};

export default App;
