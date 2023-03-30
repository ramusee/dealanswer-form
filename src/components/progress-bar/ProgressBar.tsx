import React, { FC } from 'react';
import cn from 'classnames';

import { ProgressBarItem } from '../../ui/items/progress-bar-item';
import { ProgressBarProps } from './types';
import { useSelector } from 'react-redux';
import { selectCurrentTab } from '../../store/reducers/common';

import s from './styles.module.scss';

const ProgressBar: FC<ProgressBarProps> = ({ contentList }) => {
  const currentTab = useSelector(selectCurrentTab);

  const isDisabled = currentTab === 0;
  const progressBarClassName = cn(s.progressBar, isDisabled && s.progressBarDisabled);
  return (
    <nav className={progressBarClassName}>
      {contentList.map(({ id, title, status }) => (
        <ProgressBarItem key={id} id={id} title={title} status={status} />
      ))}
    </nav>
  );
};

export { ProgressBar };
