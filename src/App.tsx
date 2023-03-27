import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

import './assets/styles/normalize.css';
import './assets/styles/global.scss';

import { MainPage } from './pages/main';

function App() {
  return (
    <ProSidebarProvider>
      <div className="App">
        <MainPage />
      </div>
    </ProSidebarProvider>
  );
}

export default App;
