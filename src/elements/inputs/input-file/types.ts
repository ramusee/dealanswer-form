import React from 'react';
import { IconProps } from '../../../types/icons';
import { InputFileSize, InputType } from '../../../types/inputFile';

interface InputFileProps {
  type?: InputType;
  title: string;
  Icon?: React.FC<IconProps> | null;
  size?: InputFileSize;
  onUpload: (file: File) => void;
  isDisabled?: boolean;
}

export type { InputFileProps };
