import React, { FC } from 'react';
import { CheckboxGroupProps } from './types';
import { InputCheckbox } from '../../../ui/inputs/input-checkbox';

import s from './styles.module.scss';

const CheckboxGroup: FC<CheckboxGroupProps> = ({ groupName, checkboxList }) => {
  return (
    <div className={s.container}>
      {checkboxList.map(title => (
        <InputCheckbox key={title} name={groupName} title={title} />
      ))}
    </div>
  );
};

export { CheckboxGroup };
