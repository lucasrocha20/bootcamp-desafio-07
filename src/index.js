import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
