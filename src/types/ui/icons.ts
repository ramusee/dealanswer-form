interface IconProps {
  fill?: string | undefined;
  stroke?: string | undefined;
  width?: number;
  height?: number;
  className?: string;
}

enum IconsKey {
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
  Close = 'Close',
  Edit = 'Edit',
  Paperclip = 'Paperclip',
  Trash = 'Trash',
  Login = 'Login',
  CheckGreen = 'CheckGreen',
}

export type { IconProps };
export { IconsKey };
