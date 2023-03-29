import React, { FC } from 'react';
import cn from 'classnames';

import { ProgressBarItem } from '../../ui/items/progress-bar-item';
import { ProgressBarProps } from './types';

import s from './styles.module.scss';
import { RouteNames } from '../../routing/routeNames';
import { Button } from '../../ui/button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';

const ProgressBar: FC<ProgressBarProps> = ({ contentList, isDisabled }) => {
  const progressBarClassName = cn(s.progressBar, isDisabled && s.progressBarDisabled);
  return (
    <nav className={progressBarClassName}>
      {contentList.map(({ id, title, status }) => (
        <ProgressBarItem key={id} id={id} title={title} status={status} />
      ))}
      <Button size={ButtonSize.M} link={RouteNames.exampleUiForm} color={ButtonColor.White}>
        UI Kit
      </Button>
    </nav>
  );
};

export { ProgressBar };
