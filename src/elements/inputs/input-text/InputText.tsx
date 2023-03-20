import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputTextProps } from './types';

import s from './styles.module.scss';

const InputText: FC<InputTextProps> = ({ name, isDisabled }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, watch } = useFormContext();
  const inputValue = watch(name);
  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };

  const containerClassName = cn(
    s.container,
    isActive && s.active,
    inputValue && s.filled,
    isDisabled && s.disabled,
  );
  return (
    <label className={containerClassName}>
      {inputValue && <span>{name}</span>}
      <input
        {...register(name, {
          disabled: isDisabled,
        })}
        placeholder={name}
        onFocus={activeHandler}
        onBlur={activeHandler}
        type="text"
      />
    </label>
  );
};

export { InputText };
