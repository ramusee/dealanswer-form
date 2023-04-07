import React, { FC, useState } from 'react';
import { InputDescBlockProps } from '../types';
import { InputFile } from '../../../../ui/inputs/input-file';

import { Button } from '../../../../ui/button';
import { ButtonColor, ButtonSize } from '../../../../types/ui/button';
import { ICONS } from '../../../../consts/icons';

import s from '../styles.module.scss';
import { InputFileSize } from '../../../../types/ui/inputFile';

const InputFileDescBlock: FC<InputDescBlockProps> = ({ inputTitle, description }) => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const onUpload = (file: File) => {
    const fileName = file.name;
    setCurrentFile(file);
  };

  return (
    <div className={s.inputDescBlockContainer}>
      {!currentFile ? (
        <>
          <InputFile title={inputTitle} size={InputFileSize.Fix} onUpload={onUpload} />
          <p>{description}</p>
        </>
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

export { InputFileDescBlock };
