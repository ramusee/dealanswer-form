import { persistor, store } from '../../store';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withProviders = (Component: any) => {
  return (props: any) => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ProSidebarProvider>
              <Component {...props} />
            </ProSidebarProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
  };
};
