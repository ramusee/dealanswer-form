import React, { FC } from 'react';
import { InputDescBlockProps } from '../types';
import { InputFile } from '../../../elements/inputs/input-file';

import s from '../styles.module.scss';

const InputFileDescBlock: FC<InputDescBlockProps> = ({
  inputTitle,
  description,
  onUpload,
}) => {
  return (
    <div className={s.inputDescBlockContainer}>
      <InputFile text={inputTitle} onUpload={onUpload} />
      <p>{description}</p>
    </div>
  );
};

export { InputFileDescBlock };
