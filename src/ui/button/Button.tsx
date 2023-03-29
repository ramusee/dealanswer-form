import React, { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './types';

import { ButtonColor, ButtonSize } from '../../types/ui/button';

import s from './styles.module.scss';
import { Link } from 'react-router-dom';

const Button: FC<ButtonProps> = ({
  size,
  type = 'button',
  onClick,
  isDisabled = false,
  color,
  Icon,
  children,
  link,
}) => {
  const buttonClassname = cn(
    s.button,
    color === ButtonColor.Green && s.green,
    color === ButtonColor.White && s.white,
    color === ButtonColor.Grey && s.grey,
    size === ButtonSize.XL && s.xl,
    size === ButtonSize.L && s.l,
    size === ButtonSize.M && s.m,
    size === ButtonSize.S && s.s,
    size === ButtonSize.XS && s.xs,
  );
  const iconClassName = cn(s.icon, size !== ButtonSize.XL && s.iconLeft);

  return (
    <button type={type} onClick={onClick} className={buttonClassname} disabled={isDisabled}>
      {Icon && <Icon className={iconClassName} />}
      {link ? (
        <Link className={s.link} to={link}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export { Button };
