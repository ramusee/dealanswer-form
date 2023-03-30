import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputTextProps } from './types';
import { useDebounce } from '../../../hooks/useDebounce';
// import { debounce } from 'debounce';
import s from './styles.module.scss';

const InputText: FC<InputTextProps> = ({
  placeholder,
  type = 'text',
  value,
  isDisabled = false,
  isRequired = false,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, watch, trigger } = useFormContext();
  const inputValue = useDebounce(watch(value), 500);
  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };

  const containerClassName = cn(s.container, isActive && s.active, inputValue && s.filled, isDisabled && s.disabled);

  return (
    <label className={containerClassName}>
      {inputValue && <span>{placeholder}</span>}
      <input
        {...register(value, {
          disabled: isDisabled,
          required: isRequired,
        })}
        name={value}
        placeholder={placeholder}
        // onChange={debounce(async () => await trigger(value), 500)}
        onFocus={activeHandler}
        onBlur={activeHandler}
        type={type}
      />
    </label>
  );
};

export { InputText };
