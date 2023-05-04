import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputTextProps } from './types';
import s from './styles.module.scss';

const InputText: FC<InputTextProps> = ({
  placeholder,
  type = 'text',
  value,
  isDisabled = false,
  isRequired = true,
  pattern,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, watch } = useFormContext();
  const inputValue = watch(value);
  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };
  const containerClassName = cn(s.container, isActive && s.active, inputValue && s.filled, isDisabled && s.disabled);
  const patternValue = pattern
    ? { value: pattern, message: 'You’ve made a mistake in your email address.' }
    : undefined;

  return (
    <label className={containerClassName}>
      {inputValue && <span>{placeholder}</span>}
      <input
        {...register(value, {
          disabled: isDisabled,
          required: isRequired,
          pattern: patternValue,
        })}
        placeholder={placeholder}
        onFocus={activeHandler}
        onBlur={activeHandler}
        type={type}
      />
    </label>
  );
};

export { InputText };
