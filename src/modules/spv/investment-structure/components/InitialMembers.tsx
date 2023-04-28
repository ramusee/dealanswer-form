import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IndividualMemberForm } from '../../../forms/individual-member-form';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { investStructureFieldset, LEGAL_ENTITY } from '../consts';

import { LegalEntityMemberForm } from '../../../forms/legal-entity-member-form';
import s from '../styles.module.scss';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { DropdownBlock } from '../../../../ui/dropdown-block';
import { useDispatch, useSelector } from 'react-redux';
import {
  addInitialMemberName,
  removeInitialMemberName,
  selectInitialMemberNames,
  selectMembers,
} from '../../../../store/reducers/spv';

const InitialMembers = () => {
  const [showCreatePersonForm, setShowCreatePersonForm] = useState<boolean>(false);
  const initialMemberNames = useSelector(selectInitialMemberNames);
  const members = useSelector(selectMembers) || [];
  const dispatch = useDispatch();

  const memberNames = useMemo(() => members.map(({ fullLegalName }) => fullLegalName), [members.length]);

  const methods = useForm({
    defaultValues: { memberType: { radioValue: 'Individual' } },
  });

  const { watch } = methods;
  const memberTypeValue = watch('memberType.radioValue');

  const createPersonClickHandler = () => {
    setShowCreatePersonForm(true);
  };
  const addPersonHandler = (memberName: string) => {
    dispatch(addInitialMemberName(memberName));
  };
  const removePersonHandler = (memberName: string) => {
    dispatch(removeInitialMemberName(memberName));
  };

  const isInitialMembers = !!initialMemberNames.length;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={s.investmentStructureForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <Fieldset
          title={investStructureFieldset.initialMembers.title}
          subTitle={investStructureFieldset.initialMembers.subTitle}
        >
          <DropdownBlock
            title={investStructureFieldset.initialMembers.select?.placeholder || ''}
            optionList={memberNames}
            createPersonClickHandler={createPersonClickHandler}
            addPersonHandler={addPersonHandler}
            removePersonHandler={removePersonHandler}
          />
          {isInitialMembers && (
            <>
              <span className={s.dropdownTitle}>Please add another Initial Member</span>
              <DropdownBlock
                title={investStructureFieldset.initialMembers.select?.placeholder || ''}
                optionList={memberNames}
                createPersonClickHandler={createPersonClickHandler}
                addPersonHandler={addPersonHandler}
                removePersonHandler={removePersonHandler}
              />
            </>
          )}
        </Fieldset>
        {showCreatePersonForm && (
          <>
            <RadioGroup radioList={investStructureFieldset.memberType.radioList || []} groupName="memberType" />
            {memberTypeValue === LEGAL_ENTITY ? <LegalEntityMemberForm /> : <IndividualMemberForm />}
          </>
        )}
      </form>
    </FormProvider>
  );
};

export { InitialMembers };
