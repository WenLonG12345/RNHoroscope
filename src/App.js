import React from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home/Home';
import MainNavigation from './screens/MainNavigation';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation/>
    </Provider>
  )
};

export default App;
