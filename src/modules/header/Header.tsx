import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as DealAnswerLogo } from '../../assets/images/dealAnswerLogo.svg';
import { Button } from '../../ui/button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';
import { ProgressBar } from '../../components/progress-bar';
import { spvSteps } from './consts';
import { RouteNames } from '../../routing/routeNames';

import s from './styles.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerContent}>
          <Link to={RouteNames.root}>
            <DealAnswerLogo />
          </Link>
          <Button size={ButtonSize.M} link={RouteNames.exampleUiForm} color={ButtonColor.White}>
            UI Kit
          </Button>
          <Button size={ButtonSize.S} onClick={() => console.log('login')} color={ButtonColor.White} Icon={ICONS.Login}>
            Log In
          </Button>
        </div>
        <ProgressBar contentList={spvSteps} />
      </div>
    </header>
  );
};

export { Header };
