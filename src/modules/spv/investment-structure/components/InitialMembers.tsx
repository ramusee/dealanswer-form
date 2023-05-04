import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { DropdownBlock } from '../../../../ui/dropdown-block';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { Dropdown } from '../../../../ui/dropdown';
import { Sidebar } from '../../../../ui/sidebar';
import { PersonForm } from '../../../../components/forms/person-form';

import { EDIT_PERSON, investStructureFieldset } from '../consts';
import {
  addCommonMember,
  addInitialMemberName,
  removeInitialMemberName,
  selectInitialMemberNames,
  selectMembers,
} from '../../../../store/reducers/spv';
import { ICommonMember } from '../../../../types/projects/spv/investmentStructure';

import s from '../styles.module.scss';

const InitialMembers = () => {
  const [showCreatePersonForm, setShowCreatePersonForm] = useState<boolean>(false);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const initialMemberNames = useSelector(selectInitialMemberNames);
  const members = useSelector(selectMembers) || [];
  const dispatch = useDispatch();

  const commonMemberNames = useMemo(() => members.map(({ fullLegalName }) => fullLegalName), [members.length]);
  const methods = useForm<ICommonMember>({
    defaultValues: { memberType: { radioValue: 'Individual' } },
  });

  const { watch } = methods;

  const createPersonClickHandler = () => {
    setShowCreatePersonForm(true);
  };

  const addPersonHandler = (memberName: string) => {
    if (initialMemberNames.includes(memberName)) {
      return;
    }
    dispatch(addInitialMemberName(memberName));
    setShowCreatePersonForm(false);
  };
  const editPersonHandler = () => {
    setSidebarActive(prevState => !prevState);
  };
  const removePersonHandler = (memberName: string) => {
    dispatch(removeInitialMemberName(memberName));
  };

  const isAddedInitialMembers = !!initialMemberNames.length;

  const sidebarHandler = () => {
    setSidebarActive(prevState => !prevState);
  };
  const onSubmit = (data: ICommonMember) => {
    dispatch(addCommonMember(data));
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
            optionList={commonMemberNames}
            createPersonClickHandler={createPersonClickHandler}
            addPersonHandler={addPersonHandler}
            editPersonHandler={editPersonHandler}
            removePersonHandler={removePersonHandler}
            targetMembers={initialMemberNames}
          />
          {isAddedInitialMembers && (
            <>
              <span className={s.dropdownTitle}>Please add another Initial Member</span>
              <Dropdown
                title={investStructureFieldset.initialMembers.select?.placeholder || ''}
                optionList={commonMemberNames}
                optionClickHandler={addPersonHandler}
                createPersonClickHandler={createPersonClickHandler}
              />
            </>
          )}
        </Fieldset>
        {showCreatePersonForm && <PersonForm />}
      </form>
      <Sidebar title={EDIT_PERSON} active={sidebarActive} setActive={sidebarHandler}>
        <PersonForm />
      </Sidebar>
    </FormProvider>
  );
};

export { InitialMembers };
