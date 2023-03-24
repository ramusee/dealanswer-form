import React from 'react';

import { Header } from '../../modules/header';

import { MainForm } from '../../modules/mainForm';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainForm />
      </main>
    </>
  );
};

export { MainPage };
