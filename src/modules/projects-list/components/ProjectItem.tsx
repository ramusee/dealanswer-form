import React, { FC } from 'react';
import { ProjectItemProps } from '../types';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrowRight.svg';

import s from '../styles.module.scss';

const ProjectItem: FC<ProjectItemProps> = ({ title, description }) => {
  return (
    <div className={s.projectItemContainer}>
      <h2 className={s.projectItemTitle}>{title}</h2>
      <p>{description}</p>
      <div>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export { ProjectItem };
