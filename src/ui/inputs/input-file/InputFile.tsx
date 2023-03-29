import React, { FC, useRef, useState } from 'react';
import cn from 'classnames';

import { InputFileProps } from './types';
import { InputFileSize, InputType } from '../../../types/ui/inputFile';

import s from './styles.module.scss';
import { ICONS } from '../../../consts/icons';
import { ERROR_MESSAGES, MAX_SIZE, VALID_FORMATS } from './utils';

const InputFile: FC<InputFileProps> = ({
  type = InputType.Dashed,
  size = InputFileSize.Fix,
  title,
  Icon = ICONS.Paperclip,
  onUpload,
  isDisabled = false,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const inputFileRef = useRef<HTMLInputElement>(null);

  const inputFileContainerClassname = cn(
    s.inputContainer,
    type === InputType.Solid && s.solid,
    size === InputFileSize.Fix && s.fixSize,
    size === InputFileSize.Cover && s.coverSize,
    isDisabled && s.disabled,
  );
  const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    const filesArray = Array.from(files);
    const isValidFile = checkFiles(filesArray);

    if (!isValidFile) {
      return;
    }

    onUpload(filesArray[0]);

    if (inputFileRef.current !== null) {
      inputFileRef.current.value = '';
    }
  };

  const checkFiles = (files: File[]) => {
    setErrorMessage('');

    if (!files) {
      setErrorMessage(ERROR_MESSAGES.DEFAULT);
      return false;
    }

    const firstFile = Array.from(files)[0];
    const firstFileFormat = firstFile.type.split('/').pop()?.toLowerCase();

    if (!firstFileFormat) {
      return false;
    }

    const isValidFormat = VALID_FORMATS.includes(firstFileFormat);

    if (!isValidFormat) {
      setErrorMessage(ERROR_MESSAGES.FORMAT);
      return false;
    }

    if (firstFile?.size > MAX_SIZE) {
      setErrorMessage(ERROR_MESSAGES.SIZE);
      return false;
    }

    return true;
  };

  return (
    <label className={inputFileContainerClassname}>
      {Icon && <Icon />}
      {title}
      <input
        type="file"
        ref={inputFileRef}
        onChange={inputFileHandler}
        accept=".pdf,.jpg,.jpeg,.png"
        disabled={isDisabled}
      />
      {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
    </label>
  );
};

export { InputFile };
