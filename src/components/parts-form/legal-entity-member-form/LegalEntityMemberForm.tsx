import React, { useState } from 'react';

import { InputTextGroup } from '../../element-groups/input-text-group';
import { legalEntityMemberForm } from './consts';
import { ICONS } from '../../../consts/icons';

import { filesUploadingSubtitle, filesUploadingTitle } from '../../../consts/filesUploading';
import { SidebarFilesUploading } from '../../../modules/spv/investment-structure';
import { Sidebar } from '../../../ui/sidebar';
import { Button } from '../../../ui/button';

import s from './styles.module.scss';

const LegalEntityMemberForm = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const sidebarHandler = () => {
    setSidebarActive(prevState => !prevState);
  };
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
        <Button color="White" size="L" Icon={ICONS.Add} onClick={sidebarHandler}>
          {filesUploadingTitle}
        </Button>
      </div>
      <Sidebar
        title={filesUploadingTitle}
        subtitle={filesUploadingSubtitle}
        active={sidebarActive}
        setActive={sidebarHandler}
      >
        <SidebarFilesUploading />
      </Sidebar>
    </div>
  );
};

export { LegalEntityMemberForm };
