import React, { FC, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as EyeIcon } from '../../../assets/icons/eye.svg';
import { useFormContext } from 'react-hook-form';

import { InputPasswordProps } from './types';
import s from './styles.module.scss';

const PASSWORD = 'password';

const InputPassword: FC<InputPasswordProps> = ({ isDisabled = false }) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, watch } = useFormContext();
  const inputValue = watch(PASSWORD);

  const containerClassName = cn(
    s.container,
    isDisabled && s.disabled,
    inputValue && s.filled,
    isActive && s.active,
  );

  const togglePasswordHandler = () => {
    if (!inputValue) {
      return;
    }

    setIsShowPassword(prevState => !prevState);
  };

  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <label
      onFocus={activeHandler}
      onBlur={activeHandler}
      className={containerClassName}
    >
      <div className={s.content}>
        {inputValue && <span>Password</span>}
        <input
          {...register(PASSWORD, {
            required: true,
            disabled: isDisabled,
          })}
          type={!isShowPassword ? PASSWORD : 'text'}
          placeholder="Password"
          autoComplete="off"
        />
      </div>
      <div className={s.iconContainer}>
        <button type="button" onClick={togglePasswordHandler}>
          <EyeIcon />
        </button>
      </div>
    </label>
  );
};

export { InputPassword };
