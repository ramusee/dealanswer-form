import React, { FC } from 'react';
import cn from 'classnames';

import { InputTextGroupProps } from './types';
import { InputText } from '../../../ui/inputs/input-text';

import s from './styles.module.scss';

const InputTextGroup: FC<InputTextGroupProps> = ({ inputList, twoColumns = false }) => {
  const InputTextGroupContainerClassName = cn(s.inputTextGroupContainer, twoColumns && s.twoColumn);
  return (
    <div className={InputTextGroupContainerClassName}>
      {inputList.map(({ value, type, placeholder, isRequired, pattern }) => (
        <InputText
          key={value}
          value={value}
          placeholder={placeholder}
          type={type}
          pattern={pattern}
          isRequired={isRequired}
        />
      ))}
    </div>
  );
};

export { InputTextGroup };
