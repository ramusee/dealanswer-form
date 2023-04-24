import React, { FC } from 'react';

import { Header } from '../modules/header';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import { Outlet } from 'react-router';
import s from './styles.module.scss';

const AppLayout: FC = () => {
  return (
    <div className={s.mainLayout}>
      <Header />
      <img className={s.bgImage} src={backgroundImage} alt="background image" />
      <main>
        <section className={s.wrapper}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export { AppLayout };
