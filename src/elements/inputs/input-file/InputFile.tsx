import React, { FC, useRef } from 'react';
import { InputFileProps } from './types';

import s from './styles.module.scss';
import cn from 'classnames';
import { InputFileSize, InputType } from '../../../types/inputFile';

const InputFile: FC<InputFileProps> = ({
  type,
  size,
  text,
  Icon,
  inputFileHandler,
  isDisabled = false,
}) => {
  const inputFileRef = useRef(null);
  const inputFileContainerClassname = cn(
    s.inputContainer,
    type === InputType.SOLID && s.solid,
    size === InputFileSize.FIX && s.fixSize,
    isDisabled && s.disabled,
  );
  return (
    <label className={inputFileContainerClassname}>
      {Icon && <Icon />}
      {text}
      <input
        type="file"
        ref={inputFileRef}
        onChange={inputFileHandler}
        accept=".pdf,.jpg,.jpeg,.png"
        disabled={isDisabled}
      />
    </label>
  );
};

export { InputFile };
