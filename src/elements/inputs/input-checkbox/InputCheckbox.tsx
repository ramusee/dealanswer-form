import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputCheckboxProps } from './types';

import s from './styles.module.scss';

const InputCheckbox: FC<InputCheckboxProps> = ({
  title,
  name,
  isDisabled = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { register } = useFormContext();

  const inputChangeHandler = () => {
    setIsChecked(prevState => !prevState);
  };

  const containerClassName = cn(s.container, isDisabled && s.disabled);
  const checkboxClassName = cn(s.checkbox, isChecked && s.checked);

  return (
    <label className={containerClassName}>
      <div className={checkboxClassName}>
        <input
          {...register(name, {
            disabled: isDisabled,
          })}
          onChange={inputChangeHandler}
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
