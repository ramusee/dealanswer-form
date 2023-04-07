import React, { FC, useState } from 'react';
import { InputFile } from '../inputs/input-file';
import { FileBlockProps } from './types';
import { Button } from '../button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';
import { InputFileSize } from '../../types/ui/inputFile';

import s from './styles.module.scss';

const FileBlock: FC<FileBlockProps> = ({ title, value, type, size = InputFileSize.Default, Icon }) => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const onUpload = (file: File) => {
    setCurrentFile(file);
    console.log(file);
  };
  return (
    <div>
      {!currentFile ? (
        <InputFile Icon={Icon} size={size} type={type} title={title} onUpload={onUpload} />
      ) : (
        <div className={s.attachedBlock}>
          <span>{currentFile.name}</span>
          <Button size={ButtonSize.M} color={ButtonColor.Grey} Icon={ICONS.Trash} onClick={() => setCurrentFile(null)}>
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export { FileBlock };
