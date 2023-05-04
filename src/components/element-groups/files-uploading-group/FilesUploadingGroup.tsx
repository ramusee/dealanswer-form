import React, { FC } from 'react';

import { FilesUploadingGroupProps } from './types';
import { InputFileDescBlock } from './components/InputFileDescBlock';
import { documentsTypesExample } from '../../../consts/filesUploading';

import s from './styles.module.scss';

const FilesUploadingGroup: FC<FilesUploadingGroupProps> = ({ title, withCitizenship = false }) => {
  return (
    <div className={s.uploadingGroupContainer}>
      <span>{title}</span>
      {documentsTypesExample.map(({ inputTitle, documentDesc }) => (
        <InputFileDescBlock key={inputTitle} inputTitle={inputTitle} description={documentDesc} />
      ))}
    </div>
  );
};

export { FilesUploadingGroup };
