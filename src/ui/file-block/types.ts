import React from 'react';
import { InputFileSize, InputFileType } from '../../types/ui/inputFile';
import { IconProps } from '../../types/ui/icons';

interface FileBlockProps {
  title: string;
  value: string;
  Icon?: React.FC<IconProps> | null;
  type: InputFileType;
  size?: InputFileSize;
}

export type { FileBlockProps };
