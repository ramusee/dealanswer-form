import { BUTTON_ICON, BUTTON_SIZE } from '../../consts/button';

interface ButtonProps {
  size: BUTTON_SIZE;
  title?: string;
  isDisabled?: boolean;
  onClick: () => void;
  color: string;
  icon?: BUTTON_ICON;
}

export type { ButtonProps };
