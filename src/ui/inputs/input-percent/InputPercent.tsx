import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputPercentProps } from './types';
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg';

import s from './styles.module.scss';

const InputPercent: FC<InputPercentProps> = ({ name, isDisabled = false, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, watch } = useFormContext();

  const inputValue = watch(name);

  const containerClassName = cn(s.container, isDisabled && s.disabled, inputValue && s.filled, isActive && s.active);

  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <label onFocus={activeHandler} onBlur={activeHandler} className={containerClassName}>
      <div className={s.content}>
        {inputValue && <span>{name}</span>}
        <input
          {...register(name, {
            disabled: isDisabled,
          })}
          type="number"
          placeholder={name}
        />
      </div>
      <button type="button" className={s.checkButton} onClick={onClick}>
        <CheckIcon />
      </button>
    </label>
  );
};

export { InputPercent };
