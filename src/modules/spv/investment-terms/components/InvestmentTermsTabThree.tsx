import React, { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { IInvestmentTermsTabThree } from '../../../../types/projects/spv/InvestmentTerms';
import { InvestmentTermsTabProps } from '../types';

import { FieldsetInvestTermsName, investTermsFieldset, sectionTitleInvestmentTerms } from '../consts';
import { SectionTitle } from '../../../../components/section-title';
import { selectInvestmentTermsTabThree, setInvestmentTermsTabThree } from '../../../../store/reducers/spv';

import { NavigationButtons } from '../../../../components/navigation-buttons';
import { useDebounce } from '../../../../hooks/useDebounce';
import { defaultDebounceValue } from '../../../../consts/common';
import s from '../styles.module.scss';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { InputTextGroup } from '../../../../components/element-groups/input-text-group';

const InvestmentTermsTabThree: FC<InvestmentTermsTabProps> = ({ changeCurrentTab }) => {
  const investmentTermsTabThree = useSelector(selectInvestmentTermsTabThree);
  const methods = useForm<IInvestmentTermsTabThree>({
    defaultValues: investmentTermsTabThree,
  });
  const { watch } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const debouncedFullLegalName = useDebounce(cloneAllFields.portfolioInformation.fullLegalName, defaultDebounceValue);
  const debouncedState = useDebounce(cloneAllFields.portfolioInformation.state, defaultDebounceValue);
  const debouncedBriefDesc = useDebounce(cloneAllFields.portfolioInformation.briefDescription, defaultDebounceValue);

  const dispatch = useDispatch();
  console.log(cloneAllFields);
  const onSubmit = (data: IInvestmentTermsTabThree) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(setInvestmentTermsTabThree(cloneAllFields));
  }, [
    cloneAllFields.isUsdcFromInvestors.radioValue,
    cloneAllFields.isMultiAssetSpv.radioValue,
    cloneAllFields.isDistributePortfolio.radioValue,
    debouncedFullLegalName,
    debouncedState,
    debouncedBriefDesc,
  ]);

  return (
    <FormProvider {...methods}>
      <div className={s.investmentTermsContainer}>
        <SectionTitle title={sectionTitleInvestmentTerms} />
        <form className={s.investmentTermsForm} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset title={investTermsFieldset.isUsdcFromInvestors.title}>
            <RadioGroup
              radioList={investTermsFieldset.isUsdcFromInvestors.radioList || []}
              groupName={FieldsetInvestTermsName.isUsdcFromInvestors}
            />
          </Fieldset>
          <Fieldset title={investTermsFieldset.isMultiAssetSpv.title}>
            <RadioGroup
              radioList={investTermsFieldset.isMultiAssetSpv.radioList || []}
              groupName={FieldsetInvestTermsName.isMultiAssetSpv}
            />
          </Fieldset>
          <Fieldset title={investTermsFieldset.portfolioInformation.title}>
            <InputTextGroup inputList={investTermsFieldset.portfolioInformation.inputTextList || []} />
          </Fieldset>
          <Fieldset title={investTermsFieldset.portfolioPresentation.title}>
            {/*<InputFile title={investTermsFieldset.portfolioPresentation.inputFile?.title || ''} onUpload={}*/}
            File will be here
          </Fieldset>
          <Fieldset title={investTermsFieldset.isDistributePortfolio.title}>
            <RadioGroup
              radioList={investTermsFieldset.isDistributePortfolio.radioList || []}
              groupName={FieldsetInvestTermsName.isDistributePortfolio}
            />
          </Fieldset>
          <NavigationButtons backButtonHandler={() => changeCurrentTab(2)} />
        </form>
      </div>
    </FormProvider>
  );
};

export { InvestmentTermsTabThree };
