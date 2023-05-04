import React, { useState } from 'react';
import { InputFile } from '../../../../ui/inputs/input-file';
import { Button } from '../../../../ui/button';
import { ButtonColor, ButtonSize } from '../../../../types/ui/button';
import { ICONS } from '../../../../consts/icons';

import s from '../styles.module.scss';

const SidebarFilesUploading = () => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const onUpload = (file: File) => {
    setCurrentFile(file);
    console.log(file);
  };

  // TODO сделать компонент для возможности прикрепления нескольких файлов
  return (
    <div className={s.sidebarFilesUploading}>
      <InputFile size="Cover" Icon={ICONS.Add} title="Upload documents" onUpload={onUpload} />
      {currentFile && (
        <>
          <div className={s.attachedBlock}>
            <span>{currentFile.name}</span>
            <Button
              size={ButtonSize.M}
              color={ButtonColor.Grey}
              Icon={ICONS.Trash}
              onClick={() => setCurrentFile(null)}
            >
              Remove
            </Button>
          </div>
          <div className={s.saveButtonContainer}>
            <Button size={ButtonSize.L} color={ButtonColor.Green} Icon={ICONS.FolderAdd} type="submit">
              Save
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export { SidebarFilesUploading };
