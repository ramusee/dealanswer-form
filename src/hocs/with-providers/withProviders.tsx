import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

export const withProviders = (Component: any) => {
  return (props: any) => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...props} />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
  };
};
