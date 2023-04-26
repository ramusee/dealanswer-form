import { ValueOf } from '../projects/projects';

interface IconProps {
  fill?: string | undefined;
  stroke?: string | undefined;
  width?: number;
  height?: number;
  className?: string;
}

const IconsKey = {
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',
  Close: 'Close',
  Edit: 'Edit',
  Paperclip: 'Paperclip',
  Trash: 'Trash',
  Login: 'Login',
  CheckGreen: 'CheckGreen',
  Download: 'Download',
  Add: 'Add',
} as const;

type IconsKey = ValueOf<typeof IconsKey>;

export type { IconProps };
export { IconsKey };
