import React, { FC } from 'react';
import cn from 'classnames';

import { InputTextGroupProps } from './types';
import { InputText } from '../../../ui/inputs/input-text';

import s from './styles.module.scss';

const InputTextGroup: FC<InputTextGroupProps> = ({ inputList, isTwoColumns = false }) => {
  const InutTextGroupContainerClassName = cn(s.inputTextGroupContainer, isTwoColumns && s.twoColumn);
  return (
    <div className={InutTextGroupContainerClassName}>
      {inputList.map(({ value, type, placeholder, isRequired }) => (
        <InputText key={value} value={value} placeholder={placeholder} type={type} isRequired={isRequired} />
      ))}
    </div>
  );
};

export { InputTextGroup };
