import React, { FC } from 'react';
import { InputTextGroupProps } from './types';
import { InputText } from '../../../ui/inputs/input-text';

import s from './styles.module.scss';

const InputTextGroup: FC<InputTextGroupProps> = ({ inputList }) => {
  return (
    <div className={s.inputTextGroupContainer}>
      {inputList.map(({ value, type, placeholder, isRequired }) => (
        <InputText key={value} value={value} placeholder={placeholder} type={type} isRequired={isRequired} />
      ))}
    </div>
  );
};

export { InputTextGroup };
