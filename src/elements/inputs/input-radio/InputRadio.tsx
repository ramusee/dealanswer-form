import React, { FC } from 'react';

import { InputRadioProps } from './types';

import s from './styles.module.scss';
import cn from 'classnames';

const InputRadio: FC<InputRadioProps> = ({
  text,
  onChange,
  isChecked,
  name,
}) => {
  const inputContainerClassName = cn(s.inputContainer, isChecked && s.active);
  return (
    <label className={inputContainerClassName}>
      <input
        type="radio"
        checked={isChecked}
        value={text.toLowerCase()}
        onChange={onChange}
        name={name}
      />
      <span className={s.radioIcon} />
      {text}
    </label>
  );
};

export { InputRadio };
