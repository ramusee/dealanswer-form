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

  const showPasswordHandler = () => {
    if (!inputValue) {
      return;
    }

    setIsShowPassword(prevState => !prevState);
  };

  const activeHandler = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <label className={containerClassName}>
      <div className={s.content}>
        {inputValue && <span>Password</span>}
        <input
          {...register(PASSWORD, {
            disabled: isDisabled,
          })}
          type={!isShowPassword ? PASSWORD : 'text'}
          placeholder="Password"
          onFocus={activeHandler}
          onBlur={activeHandler}
        />
      </div>
      <div className={s.iconContainer}>
        <EyeIcon onClick={showPasswordHandler} />
      </div>
    </label>
  );
};

export { InputPassword };
