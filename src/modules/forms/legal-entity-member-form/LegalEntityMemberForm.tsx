import React from 'react';

import s from './styles.module.scss';
import { legalEntityMemberForm } from './consts';
import { InputTextGroup } from '../../../components/element-groups/input-text-group';
import { FileBlock } from '../../../ui/file-block';
import { InputFileType } from '../../../types/ui/inputFile';
import { ICONS } from '../../../consts/icons';

const LegalEntityMemberForm = () => {
  return (
    <div className={s.legalEntityContainer}>
      <div className={s.fieldset}>
        <span>{legalEntityMemberForm.memberInfo.title}</span>
        <InputTextGroup inputList={legalEntityMemberForm.memberInfo.inputTextList || []} twoColumns />
      </div>
      <div className={s.fieldset}>
        <span>{legalEntityMemberForm.mailingAddress.title}</span>
        <InputTextGroup inputList={legalEntityMemberForm.mailingAddress.inputTextList || []} twoColumns />
      </div>
      <div className={s.fieldset}>
        <FileBlock
          title={legalEntityMemberForm.mailingAddress.inputFile?.title || ''}
          value={legalEntityMemberForm.mailingAddress.inputFile?.value || ''}
          type={InputFileType.Solid}
          Icon={ICONS.Add}
        />
      </div>
    </div>
  );
};

export { LegalEntityMemberForm };
