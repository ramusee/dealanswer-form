import { ReactComponent as arrowRightIcon } from '../assets/icons/arrowRight.svg';
import { ReactComponent as closeIcon } from '../assets/icons/close.svg';
import { ReactComponent as editIcon } from '../assets/icons/edit.svg';
import { ReactComponent as paperclipIcon } from '../assets/icons/paperclip.svg';
import { ReactComponent as trashIcon } from '../assets/icons/trash.svg';

const BUTTON_SIZE = {
  XL: 'XL',
  L: 'L',
  M: 'M',
  S: 'S',
  XS: 'XS',
} as const;
type BUTTON_SIZE = keyof typeof BUTTON_SIZE;

const BUTTON_COLOR = {
  GREEN_BASE: 'GREEN_BASE',
  WHITE_UPLOAD: 'WHITE_UPLOAD',
} as const;
type BUTTON_COLOR = keyof typeof BUTTON_COLOR;

const BUTTON_ICON = {
  ARROW_RIGHT: arrowRightIcon,
  CLOSE: closeIcon,
  EDIT: editIcon,
  PAPERCLIP: paperclipIcon,
  TRASH: trashIcon,
};

export { BUTTON_SIZE, BUTTON_COLOR, BUTTON_ICON };
