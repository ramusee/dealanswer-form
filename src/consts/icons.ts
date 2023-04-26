import React from 'react';
import { ReactComponent as arrowRightIcon } from '../assets/icons/arrowRight.svg';
import { ReactComponent as arrowLeftIcon } from '../assets/icons/arrowLeft.svg';
import { ReactComponent as closeIcon } from '../assets/icons/close.svg';
import { ReactComponent as editIcon } from '../assets/icons/edit.svg';
import { ReactComponent as paperclipIcon } from '../assets/icons/paperclip.svg';
import { ReactComponent as trashIcon } from '../assets/icons/trash.svg';
import { ReactComponent as loginIcon } from '../assets/icons/login.svg';
import { ReactComponent as CheckGreenIcon } from '../assets/icons/checkGreen.svg';
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg';
import { ReactComponent as AddIcon } from '../assets/icons/add.svg';
import { IconsKey } from '../types/ui/icons';

const ICONS: Record<IconsKey, React.FC | null> = {
  ArrowRight: arrowRightIcon,
  ArrowLeft: arrowLeftIcon,
  Close: closeIcon,
  Edit: editIcon,
  Paperclip: paperclipIcon,
  Trash: trashIcon,
  Login: loginIcon,
  CheckGreen: CheckGreenIcon,
  Download: DownloadIcon,
  Add: AddIcon,
};

export { ICONS };
