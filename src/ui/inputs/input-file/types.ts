import React from 'react';
import { IconProps } from '../../../types/ui/icons';
import { InputFileSize, InputType } from '../../../types/ui/inputFile';

interface InputFileProps {
  type?: InputType;
  title: string;
  Icon?: React.FC<IconProps> | null;
  size?: InputFileSize;
  onUpload: (file: File) => void;
  isDisabled?: boolean;
}

export type { InputFileProps };
