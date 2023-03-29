import React, { FC } from 'react';
import { FieldsetProps } from './types';

import s from './styles.module.scss';

const Fieldset: FC<FieldsetProps> = ({ title, subTitle, children }) => {
  return (
    <div className={s.fieldset}>
      <span>{title}</span>
      {subTitle && <span>{subTitle}</span>}
      {children}
    </div>
  );
};

export { Fieldset };
