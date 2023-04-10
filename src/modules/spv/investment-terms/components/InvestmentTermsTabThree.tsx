import React, { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { IInvestmentTermsTabThree } from '../../../../types/projects/spv/InvestmentTerms';
import { InvestmentTermsTabProps } from '../types';

import { FieldsetInvestTermsName, investTermsFieldset, sectionTitleInvestmentTerms } from '../consts';
import { SectionTitle } from '../../../../components/section-title';
import { selectInvestmentTermsTabThree, setInvestmentTermsTabThree } from '../../../../store/reducers/spv';
import { InputText } from '../../../../ui/inputs/input-text';
import { defaultDebounceValue } from '../../../../consts/common';
import { InputFileType } from '../../../../types/ui/inputFile';
import { ICONS } from '../../../../consts/icons';

import { NavigationButtons } from '../../../../components/navigation-buttons';
import { useDebounce } from '../../../../hooks/useDebounce';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { InputTextGroup } from '../../../../components/element-groups/input-text-group';
import { FileBlock } from '../../../../ui/file-block';
import { nextProgressStep } from '../../../../store/reducers/common';

import s from '../styles.module.scss';

const InvestmentTermsTabThree: FC<InvestmentTermsTabProps> = ({ changeCurrentTab }) => {
  const investmentTermsTabThree = useSelector(selectInvestmentTermsTabThree);
  const methods = useForm<IInvestmentTermsTabThree>({
    defaultValues: investmentTermsTabThree,
  });
  const { watch, setValue } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const debouncedFullLegalName = useDebounce(cloneAllFields.portfolioInformation.fullLegalName, defaultDebounceValue);
  const debouncedState = useDebounce(cloneAllFields.portfolioInformation.state, defaultDebounceValue);
  const debouncedBriefDesc = useDebounce(cloneAllFields.portfolioInformation.briefDescription, defaultDebounceValue);
  const debouncedIsMultiAssetSpvTextValue = useDebounce(cloneAllFields.isMultiAssetSpvTextValue, defaultDebounceValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInvestmentTermsTabThree(cloneAllFields));
  }, [
    cloneAllFields.isUsdcFromInvestors.radioValue,
    cloneAllFields.isMultiAssetSpv.radioValue,
    cloneAllFields.isDistributePortfolio.radioValue,
    debouncedFullLegalName,
    debouncedState,
    debouncedBriefDesc,
    debouncedIsMultiAssetSpvTextValue,
  ]);

  useEffect(() => {
    if (!cloneAllFields.isMultiAssetSpvTextValue) {
      return;
    }

    setValue('isMultiAssetSpvTextValue', '');
  }, [cloneAllFields.isMultiAssetSpv.radioValue]);

  const onSubmit = (data: IInvestmentTermsTabThree) => {
    console.log(data);
    dispatch(nextProgressStep());
  };
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
            {cloneAllFields.isMultiAssetSpv.radioValue === 'Yes' && (
              <InputText
                value={investTermsFieldset.isMultiAssetSpv.inputText?.value || ''}
                placeholder={investTermsFieldset.isMultiAssetSpv.inputText?.placeholder || ''}
              />
            )}
          </Fieldset>
          <Fieldset title={investTermsFieldset.portfolioInformation.title}>
            <InputTextGroup inputList={investTermsFieldset.portfolioInformation.inputTextList || []} />
          </Fieldset>
          <Fieldset title={investTermsFieldset.portfolioPresentation.title}>
            <FileBlock
              value={investTermsFieldset.portfolioPresentation.inputFile?.value || ''}
              title={investTermsFieldset.portfolioPresentation.inputFile?.title || ''}
              type={InputFileType.Solid}
              Icon={ICONS.Download}
            />
          </Fieldset>
          <Fieldset title={investTermsFieldset.isDistributePortfolio.title}>
            <RadioGroup
              radioList={investTermsFieldset.isDistributePortfolio.radioList || []}
              groupName={FieldsetInvestTermsName.isDistributePortfolio}
            />
          </Fieldset>
          <NavigationButtons backButtonHandler={() => changeCurrentTab(2)} nextButtonTitle="Investment Structure" />
        </form>
      </div>
    </FormProvider>
  );
};

export { InvestmentTermsTabThree };
