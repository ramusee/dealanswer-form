import React from 'react';

import { Header } from '../../modules/header';

import { MainForm } from '../../modules/mainForm';
import { AppSidebar } from '../../modules/app-sidebar/AppSidebar';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        {/*<AppSidebar />*/}
        <MainForm />
      </main>
    </>
  );
};

export { MainPage };
