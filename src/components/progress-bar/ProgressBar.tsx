import React, { FC } from 'react';

import { ProgressBarItem } from '../../elements/items/progress-bar-item/ProgressBarItem';
import { spvSteps } from './utils';
import s from './styles.module.scss';

const ProgressBar: FC = () => {
  return (
    <nav className={s.headerProgressBar}>
      {spvSteps.map(({ id, title, status }) => (
        <ProgressBarItem key={id} id={id} title={title} status={status} />
      ))}
    </nav>
  );
};

export { ProgressBar };
