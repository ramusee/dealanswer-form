import React from 'react';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { SectionTitle } from '../../../components/section-title';
import { investStructureFieldset, sectionTitleInvestmentStructure } from './consts';
import { Fieldset } from '../../../components/fieldset/Fieldset';
import { InputText } from '../../../ui/inputs/input-text';
import { NavigationButtons } from '../../../components/navigation-buttons';
import { previousProgressStep } from '../../../store/reducers/common';
import { DropdownBlock } from '../../../ui/dropdown-block';
import { InitialMembers } from './components/InitialMembers';

import s from './styles.module.scss';

const InvestmentStructure = () => {
  const dispatch = useDispatch();
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className={s.investmentStructureContainer}>
        <SectionTitle title={sectionTitleInvestmentStructure} />
        <form className={s.investmentStructureForm} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset title={investStructureFieldset.desiredSpvName.title}>
            <InputText
              value={investStructureFieldset.desiredSpvName.inputText?.value || ''}
              placeholder={investStructureFieldset.desiredSpvName.inputText?.placeholder || ''}
            />
          </Fieldset>
          <Fieldset
            title={investStructureFieldset.initialMembers.title}
            subTitle={investStructureFieldset.initialMembers.subTitle}
          >
            <DropdownBlock
              title={investStructureFieldset.initialMembers.select?.placeholder || ''}
              optionList={investStructureFieldset.initialMembers.members || []}
            />
          </Fieldset>
          <InitialMembers />
          <NavigationButtons backButtonHandler={() => dispatch(previousProgressStep())} nextButtonTitle="Add-Ons" />
        </form>
      </div>
    </FormProvider>
  );
};

export { InvestmentStructure };
