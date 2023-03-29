import React from 'react';
import { ReactComponent as arrowRightIcon } from '../assets/icons/arrowRight.svg';
import { ReactComponent as closeIcon } from '../assets/icons/close.svg';
import { ReactComponent as editIcon } from '../assets/icons/edit.svg';
import { ReactComponent as paperclipIcon } from '../assets/icons/paperclip.svg';
import { ReactComponent as trashIcon } from '../assets/icons/trash.svg';
import { ReactComponent as loginIcon } from '../assets/icons/login.svg';

import { IconsKey } from '../types/ui/icons';

const ICONS: Record<IconsKey, React.FC | null> = {
  ArrowRight: arrowRightIcon,
  Close: closeIcon,
  Edit: editIcon,
  Paperclip: paperclipIcon,
  Trash: trashIcon,
  Login: loginIcon,
};

export { ICONS };
