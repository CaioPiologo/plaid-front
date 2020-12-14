import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
// REDUX
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
