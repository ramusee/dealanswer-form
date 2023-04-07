import React from 'react';
import { IconProps } from '../../../types/ui/icons';
import { InputFileSize, InputFileType } from '../../../types/ui/inputFile';

interface InputFileProps {
  type?: InputFileType;
  title: string;
  Icon?: React.FC<IconProps> | null;
  size?: InputFileSize;
  onUpload: (file: File) => void;
  isDisabled?: boolean;
}

export type { InputFileProps };
