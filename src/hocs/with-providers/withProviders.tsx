import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import { persistor, store } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

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
