import React from 'react';
import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { IconProps } from '../../types/ui/icons';

interface ButtonProps {
  size: ButtonSize;
  type?: 'button' | 'reset' | 'submit';
  children?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  color: ButtonColor;
  Icon?: React.FC<IconProps> | null;
  link?: string;
  iconRight?: boolean;
}

export type { ButtonProps };
