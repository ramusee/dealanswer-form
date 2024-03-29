import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { RadioGroup } from '../../element-groups/radio-group';
import { investStructureFieldset, LEGAL_ENTITY } from '../../../modules/spv/investment-structure/consts';
import { LegalEntityMemberForm } from '../../parts-form/legal-entity-member-form';
import { IndividualMemberForm } from '../../parts-form/individual-member-form';
import { Button } from '../../../ui/button';
import { ButtonColor, ButtonSize } from '../../../types/ui/button';
import { ICONS } from '../../../consts/icons';
import { PersonFormProps } from './types';

import s from './styles.module.scss';

const PersonForm: FC<PersonFormProps> = ({ alreadyExistsPersonError }) => {
  const { watch } = useFormContext();
  const memberTypeValue = watch('memberType.radioValue');

  return (
    <div className={s.personForm}>
      <RadioGroup radioList={investStructureFieldset.memberType.radioList || []} groupName="memberType" />
      {memberTypeValue === LEGAL_ENTITY ? <LegalEntityMemberForm /> : <IndividualMemberForm />}
      {alreadyExistsPersonError && <span className={s.errorMessage}>Member with the same name already exists</span>}
      <div className={s.saveButtonContainer}>
        <Button size={ButtonSize.L} color={ButtonColor.Green} Icon={ICONS.FolderAdd} type="submit">
          Save
        </Button>
      </div>
    </div>
  );
};

export { PersonForm };
