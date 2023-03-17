import React, { FC } from 'react';
import cn from 'classnames';

import { InputRadioProps } from './types';

import s from './styles.module.scss';

const InputRadio: FC<InputRadioProps> = ({
  text,
  onChange,
  isChecked,
  name,
  isDisabled = false,
}) => {
  const inputContainerClassName = cn(
    s.inputContainer,
    isChecked && s.active,
    isDisabled && s.disabled,
  );
  return (
    <label className={inputContainerClassName}>
      <input
        type="radio"
        checked={isChecked}
        value={text.toLowerCase()}
        onChange={onChange}
        name={name}
        disabled={isDisabled}
      />
      <span className={s.radioIcon} />
      {text}
    </label>
  );
};

export { InputRadio };
