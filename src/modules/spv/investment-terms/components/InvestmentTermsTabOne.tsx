import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { FieldsetInvestTermsName, investTermsFieldset, sectionTitleInvestmentTerms } from '../consts';
import { InvestmentTermsTabProps } from '../types';
import { IInvestmentTermsTabOne } from '../../../../types/projects/spv/InvestmentTerms';
import { defaultDebounceValue } from '../../../../consts/common';
import { useDebounce } from '../../../../hooks/useDebounce';

import { SectionTitle } from '../../../../components/section-title';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { previousProgressStep } from '../../../../store/reducers/common';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { CheckboxGroup } from '../../../../components/element-groups/checkbox-group';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { selectInvestmentTermsTabOne, setInvestmentTermsTabOne } from '../../../../store/reducers/spv';

import s from '../styles.module.scss';

const InvestmentTermsTabOne: FC<InvestmentTermsTabProps> = ({ changeCurrentTab }) => {
  const investmentTermsTabOne = useSelector(selectInvestmentTermsTabOne);
  const dispatch = useDispatch();
  const methods = useForm<IInvestmentTermsTabOne>({
    defaultValues: investmentTermsTabOne,
  });
  const { watch } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const debouncedCarriedInterestTextValue = useDebounce(
    cloneAllFields.carriedInterest.contentTextValue,
    defaultDebounceValue,
  );
  const debouncedPreferredReturnTextValue = useDebounce(
    cloneAllFields.preferredReturn.contentTextValue,
    defaultDebounceValue,
  );

  useEffect(() => {
    dispatch(setInvestmentTermsTabOne(cloneAllFields));
  }, [
    cloneAllFields.carriedInterestMembers?.length,
    cloneAllFields.carriedInterest.radioValue,
    cloneAllFields.preferredReturn.radioValue,
    debouncedCarriedInterestTextValue,
    debouncedPreferredReturnTextValue,
  ]);

  const onSubmit = (data: IInvestmentTermsTabOne) => {
    console.log(data);
    changeCurrentTab(2);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.investmentTermsContainer}>
        <SectionTitle title={sectionTitleInvestmentTerms} />
        <form className={s.investmentTermsForm} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset
            title={investTermsFieldset.carriedInterestMembers.title}
            subTitle={investTermsFieldset.carriedInterestMembers.subTitle}
          >
            <CheckboxGroup
              groupName={FieldsetInvestTermsName.carriedInterestMembers}
              checkboxList={investTermsFieldset.carriedInterestMembers.checkboxList || []}
            />
          </Fieldset>
          <Fieldset
            title={investTermsFieldset.carriedInterest.title}
            subTitle={investTermsFieldset.carriedInterest.subTitle}
          >
            <RadioGroup
              radioList={investTermsFieldset.carriedInterest.radioList || []}
              groupName={FieldsetInvestTermsName.carriedInterest}
            />
          </Fieldset>
          <Fieldset
            title={investTermsFieldset.preferredReturn.title}
            subTitle={investTermsFieldset.preferredReturn.subTitle}
          >
            <RadioGroup
              radioList={investTermsFieldset.preferredReturn.radioList || []}
              groupName={FieldsetInvestTermsName.preferredReturn}
            />
          </Fieldset>
          <NavigationButtons backButtonHandler={() => dispatch(previousProgressStep())} />
        </form>
      </div>
    </FormProvider>
  );
};

export { InvestmentTermsTabOne };
