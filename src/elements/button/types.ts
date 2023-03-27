import React from 'react';
import { ButtonSize, ButtonColor } from '../../types/button';
import { IconProps } from '../../types/icons';

interface ButtonProps {
  size: ButtonSize | number;
  children?: React.ReactNode;
  isDisabled?: boolean;
  onClick: () => void;
  color: ButtonColor;
  Icon?: React.FC<IconProps> | null;
}

export type { ButtonProps };
