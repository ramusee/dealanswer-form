import React, { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { FieldsetInvestTermsName, investTermsFieldset, sectionTitleInvestmentTerms } from '../consts';
import { defaultDebounceValue } from '../../../../consts/common';
import { IInvestmentTermsTabTwo } from '../../../../types/projects/spv/InvestmentTerms';
import { InvestmentTermsTabProps } from '../types';
import { useDebounce } from '../../../../hooks/useDebounce';

import { SectionTitle } from '../../../../components/section-title';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { selectInvestmentTermsTabTwo, setInvestmentTermsTabTwo } from '../../../../store/reducers/spv';

import s from '../styles.module.scss';

const InvestmentTermsTabTwo: FC<InvestmentTermsTabProps> = ({ changeCurrentTab }) => {
  const investmentTermsTabTwo = useSelector(selectInvestmentTermsTabTwo);

  const methods = useForm<IInvestmentTermsTabTwo>({
    defaultValues: investmentTermsTabTwo,
  });
  const { watch } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const debouncedManagementFeeTextValue = useDebounce(
    cloneAllFields.managementFee.contentTextValue,
    defaultDebounceValue,
  );
  const debouncedSubscriptionFeeTextValue = useDebounce(
    cloneAllFields.subscriptionFee.contentTextValue,
    defaultDebounceValue,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInvestmentTermsTabTwo(cloneAllFields));
  }, [
    cloneAllFields.managementFee.radioValue,
    debouncedManagementFeeTextValue,
    cloneAllFields.typeManagementFee.radioValue,
    cloneAllFields.subscriptionFee.radioValue,
    debouncedSubscriptionFeeTextValue,
    cloneAllFields.isSubscriptionFeeCapital.radioValue,
  ]);

  const onSubmit = (data: IInvestmentTermsTabTwo) => {
    console.log(data);
    changeCurrentTab(3);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.investmentTermsContainer}>
        <SectionTitle title={sectionTitleInvestmentTerms} />
        <form className={s.investmentTermsForm} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset
            title={investTermsFieldset.managementFee.title}
            subTitle={investTermsFieldset.managementFee.subTitle}
          >
            <RadioGroup
              radioList={investTermsFieldset.managementFee.radioList || []}
              groupName={FieldsetInvestTermsName.managementFee}
            />
          </Fieldset>
          <Fieldset title={investTermsFieldset.typeManagementFee.title}>
            <RadioGroup
              radioList={investTermsFieldset.typeManagementFee.radioList || []}
              groupName={FieldsetInvestTermsName.typeManagementFee}
            />
          </Fieldset>
          <Fieldset
            title={investTermsFieldset.subscriptionFee.title}
            subTitle={investTermsFieldset.subscriptionFee.subTitle}
          >
            <RadioGroup
              radioList={investTermsFieldset.subscriptionFee.radioList || []}
              groupName={FieldsetInvestTermsName.subscriptionFee}
            />
          </Fieldset>
          <Fieldset title={investTermsFieldset.isSubscriptionFeeCapital.title}>
            <RadioGroup
              radioList={investTermsFieldset.isSubscriptionFeeCapital.radioList || []}
              groupName={FieldsetInvestTermsName.isSubscriptionFeeCapital}
            />
          </Fieldset>
          <NavigationButtons backButtonHandler={() => changeCurrentTab(1)} />
        </form>
      </div>
    </FormProvider>
  );
};

export { InvestmentTermsTabTwo };
