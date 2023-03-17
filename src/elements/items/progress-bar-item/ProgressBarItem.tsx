import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as CircleCheckIcon } from '../../../assets/icons/circleCheck.svg';
import { ReactComponent as ArrowRightSmIcon } from '../../../assets/icons/arrowRightSm.svg';
import { Statuses } from '../../../types/progressBar';
import { ProgressBarItemProps } from './types';

import s from './styles.module.scss';

const ProgressBarItem: FC<ProgressBarItemProps> = ({ id, title, status }) => {
  const isDone = status === Statuses.Done;
  const isActiveItem = status === Statuses.InProgress && s.activeIcon;

  const iconClassName = cn(s.icon, isActiveItem && s.activeIcon);

  const contentClassName = cn(s.content, isActiveItem && s.contentActive);
  return (
    <div className={s.container}>
      <div className={contentClassName}>
        {isDone ? (
          <CircleCheckIcon />
        ) : (
          <div className={iconClassName}>{id}</div>
        )}
        <span className={s.title}>{title}</span>
      </div>
      <div className={s.arrowIcon}>
        <ArrowRightSmIcon />
      </div>
    </div>
  );
};

export { ProgressBarItem };
