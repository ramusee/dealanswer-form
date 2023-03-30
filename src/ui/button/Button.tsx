import React, { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './types';

import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';

const Button: FC<ButtonProps> = ({
  size,
  type = 'button',
  onClick,
  isDisabled = false,
  color,
  Icon,
  children,
  link,
  iconRight = false,
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
    iconRight && s.iconRight,
  );

  const iconClassName = cn(s.icon, iconRight && s.iconRight);

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
