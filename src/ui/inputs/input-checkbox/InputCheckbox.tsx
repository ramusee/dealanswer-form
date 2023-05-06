import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputCheckboxProps } from './types';

import s from './styles.module.scss';

const InputCheckbox: FC<InputCheckboxProps> = ({ title, name, isDisabled = false }) => {
  const { register } = useFormContext();

  const containerClassName = cn(s.container, isDisabled && s.disabled);
  const checkboxClassName = cn(s.checkbox);

  return (
    <label className={containerClassName}>
      <div className={checkboxClassName}>
        <input
          {...register(name, {
            disabled: isDisabled,
            required: true,
          })}
          value={title}
          type="checkbox"
        />
        <span className={s.checkIcon} />
      </div>
      {title}
    </label>
  );
};

export { InputCheckbox };
