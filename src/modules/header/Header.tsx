import React from 'react';

import { ReactComponent as DealAnswerLogo } from '../../assets/images/dealAnswerLogo.svg';
import { Button } from '../../elements/button';

import { ButtonColor, ButtonSize } from '../../types/button';
import { ICONS } from '../../consts/icons';
import { ProgressBar } from '../../components/progress-bar';

import s from './styles.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerContent}>
          <DealAnswerLogo />
          <Button
            title="Log In"
            size={ButtonSize.S}
            onClick={() => console.log('login')}
            color={ButtonColor.White}
            Icon={ICONS.Login}
          />
        </div>
        <ProgressBar />
      </div>
    </header>
  );
};

export { Header };
