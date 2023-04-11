import React from 'react';
import { SectionTitle } from '../../../components/section-title';
import { FormProvider, useForm } from 'react-hook-form';
import { investStructureFieldset, sectionTitleInvestmentStructure } from './consts';
import { Fieldset } from '../../../components/fieldset/Fieldset';
import { InputText } from '../../../ui/inputs/input-text';
import s from './styles.module.scss';
import { NavigationButtons } from '../../../components/navigation-buttons';
import { useDispatch } from 'react-redux';
import { previousProgressStep } from '../../../store/reducers/common';
import { DropdownBlock } from '../../../ui/dropdown-block';
import { InitialMembers } from './components/InitialMembers';

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
              title={investStructureFieldset.initialMembers.title}
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
