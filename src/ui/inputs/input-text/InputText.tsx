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

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const inputValue = watch(value);
  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };

  const isErrorPattern = errors[value]?.type === 'pattern';
  const isErrorRequired = errors[value]?.type === 'required';

  const containerClassName = cn(
    s.container,
    isActive && s.active,
    inputValue && s.filled,
    isDisabled && s.disabled,
    errors[value] && s.redBorder,
  );

  return (
    <label className={containerClassName}>
      {inputValue && <span className={s.placeholder}>{placeholder}</span>}
      <input
        {...register(value, {
          disabled: isDisabled,
          required: isRequired,
          pattern: pattern,
        })}
        placeholder={placeholder}
        onFocus={activeHandler}
        onBlur={activeHandler}
        type={type}
      />
      {isErrorRequired && <span className={s.errorMessage}>Please fill the field</span>}
      {isErrorPattern && <span className={s.errorMessage}>You’ve made a mistake in your email address.</span>}
    </label>
  );
};

export { InputText };
