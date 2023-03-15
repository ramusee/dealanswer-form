import React, { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './types';

import s from './styles.module.scss';
import { ButtonColor, ButtonSize } from '../../types/button';

const Button: FC<ButtonProps> = ({
  size,
  title = '',
  onClick,
  isDisabled = false,
  color,
  Icon,
}) => {
  const buttonClassname = cn(
    s.button,
    color === ButtonColor.GREEN && s.green,
    color === ButtonColor.WHITE && s.white,
    color === ButtonColor.GREY && s.grey,
    size === ButtonSize.XL && s.xl,
    size === ButtonSize.L && s.l,
    size === ButtonSize.M && s.m,
    size === ButtonSize.S && s.s,
    size === ButtonSize.XS && s.xs,
  );
  const iconClassName = cn(s.icon, size !== ButtonSize.XL && s.iconLeft);
  return (
    <div onClick={onClick} className={s.buttonContainer}>
      <button className={buttonClassname} disabled={isDisabled}>
        {Icon && <Icon className={iconClassName} />}
        {title}
      </button>
    </div>
  );
};

export { Button };
