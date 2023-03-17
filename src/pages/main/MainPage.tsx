import React from 'react';

import { Header } from '../../modules/header';

import { MainForm } from '../../modules/mainForm';

import s from './styles.module.scss';

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
