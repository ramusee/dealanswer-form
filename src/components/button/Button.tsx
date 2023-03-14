import React, { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './types';

import s from './styles.module.scss';
import { BUTTON_COLOR, BUTTON_SIZE } from '../../consts/button';

const Button: FC<ButtonProps> = ({
  size,
  title = '',
  onClick,
  isDisabled = false,
  color,
  icon,
}) => {
  const buttonClassname = cn(
    s.button,
    color === BUTTON_COLOR.GREEN_BASE && s.green,
    color === BUTTON_COLOR.WHITE_UPLOAD && s.whiteUpload,
    size === BUTTON_SIZE.XL && s.xl,
    size === BUTTON_SIZE.L && s.l,
    size === BUTTON_SIZE.M && s.M,
    size === BUTTON_SIZE.S && s.s,
    size === BUTTON_SIZE.XS && s.xs,
  );
  const iconClassName = cn(s.icon, size !== BUTTON_SIZE.XL && s.iconLeft);
  return (
    <div onClick={onClick} className={s.buttonContainer}>
      <button className={buttonClassname}>
        {icon && <img className={iconClassName} src={icon} alt="icon" />}
        {title}
      </button>
    </div>
  );
};

export { Button };
