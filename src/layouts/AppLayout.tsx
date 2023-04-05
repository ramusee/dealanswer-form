import React, { FC } from 'react';

import { Header } from '../modules/header';
import { BackgroundVideo } from '../components/background-video';

import { Outlet } from 'react-router';
import s from './styles.module.scss';

const AppLayout: FC = () => {
  return (
    <div className={s.mainLayout}>
      <BackgroundVideo />
      <Header />
      <main>
        <section className={s.wrapper}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export { AppLayout };
