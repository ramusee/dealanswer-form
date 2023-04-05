import React, { FC } from 'react';

import { SectionTitleProps } from './types';

import s from './styles.module.scss';

const SectionTitle: FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className={s.sectionTitleContainer}>
      <h2>{title}</h2>
      {subTitle && <span>{subTitle}</span>}
    </div>
  );
};

export { SectionTitle };
