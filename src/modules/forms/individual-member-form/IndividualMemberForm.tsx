import React from 'react';
import { InputFileDescBlock } from '../../../components/element-groups/files-uploading-group/components/InputFileDescBlock';
import { individualMemberForm } from './consts';
import { InputText } from '../../../ui/inputs/input-text';
import { InputTextGroup } from '../../../components/element-groups/input-text-group';

import s from './styles.module.scss';

const IndividualMemberForm = () => {
  return (
    <div className={s.individualMemberContainer}>
      <div className={s.fieldset}>
        <InputFileDescBlock
          inputTitle={individualMemberForm.passport.inputFile?.title || ''}
          description={individualMemberForm.passport.inputFile?.description || ''}
        />
        <InputText
          value={individualMemberForm.passport.inputText?.value || ''}
          placeholder={individualMemberForm.passport.inputText?.placeholder || ''}
        />
      </div>
      <div className={s.fieldset}>
        <span>{individualMemberForm.memberInfo.title}</span>
        <InputTextGroup inputList={individualMemberForm.memberInfo.inputTextList || []} twoColumns />
      </div>
    </div>
  );
};

export { IndividualMemberForm };
