import React, { FC, useEffect } from 'react';
import { FieldsetWelcomeBlockName, RadioValue, spvWelcomeFieldset } from './consts';

import { RadioGroup } from '../../../components/element-groups/radio-group';
import { FormProvider, useForm } from 'react-hook-form';
import { InputText } from '../../../ui/inputs/input-text';
import { Button } from '../../../ui/button';
import { Fieldset } from '../../../components/fieldset/Fieldset';
import { CheckboxGroup } from '../../../components/element-groups/checkbox-group';

import { ButtonColor, ButtonSize } from '../../../types/ui/button';
import { ICONS } from '../../../consts/icons';
import { ISpvWelcomeBlockForm } from '../../../types/projects/spv/welcomeBlock';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSpvWelcomeBlock,
  setChangeMemberRoleInformation,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setPreviousSpvName,
} from '../../../store/reducers/spv';
import { useDebounce } from '../../../hooks/useDebounce';
import { defaultDebounceValue } from '../../../consts/common';

import s from './styles.module.scss';
import { nextProgressStep } from '../../../store/reducers/common';

const SpvWelcomeBlock: FC = () => {
  const spvWelcomeBlock = useSelector(selectSpvWelcomeBlock);
  const dispatch = useDispatch();

  const methods = useForm<ISpvWelcomeBlockForm>({
    defaultValues: {
      isFirstTimeSpv: {
        radioValue: spvWelcomeBlock.isFirstTimeSpv,
      },
      previousSpvName: spvWelcomeBlock.previousSpvName,
      isChangeSpvInvestmentStructure: {
        radioValue: spvWelcomeBlock.isChangeSpvInvestmentStructure,
      },
      isChangeSpvInvestmentTerms: {
        radioValue: spvWelcomeBlock.isChangeSpvInvestmentStructure,
      },
      changeMemberRoleInformation: spvWelcomeBlock.changeMemberRoleInformation,
    },
  });
  const { watch } = methods;

  const isFirstTimeSpvValue = watch(FieldsetWelcomeBlockName.isFirstTimeSpv);
  const previousSpvNameValue = useDebounce(watch('previousSpvName'), defaultDebounceValue);
  const isChangeSpvStructureValue = watch(FieldsetWelcomeBlockName.isChangeSpvInvestmentStructure);
  const isChangeSpvTermsValue = watch(FieldsetWelcomeBlockName.isChangeSpvInvestmentTerms);
  const memberRoleValue = watch(FieldsetWelcomeBlockName.changeMemberRoleInformation);

  useEffect(() => {
    if (!isFirstTimeSpvValue.radioValue || isFirstTimeSpvValue.radioValue === spvWelcomeBlock.isFirstTimeSpv) {
      return;
    }
    dispatch(setIsFirstTimeSpv(isFirstTimeSpvValue.radioValue));
  }, [isFirstTimeSpvValue.radioValue]);

  useEffect(() => {
    if (spvWelcomeBlock.previousSpvName === previousSpvNameValue) {
      return;
    }
    dispatch(setPreviousSpvName(previousSpvNameValue));
  }, [previousSpvNameValue]);

  useEffect(() => {
    if (
      !isChangeSpvStructureValue.radioValue ||
      isChangeSpvStructureValue.radioValue === spvWelcomeBlock.isChangeSpvInvestmentStructure
    ) {
      return;
    }
    dispatch(setIsChangeSpvInvestmentStructure(isChangeSpvStructureValue.radioValue));
  }, [isChangeSpvStructureValue.radioValue]);

  useEffect(() => {
    if (
      !isChangeSpvTermsValue.radioValue ||
      isChangeSpvTermsValue.radioValue === spvWelcomeBlock.isChangeSpvInvestmentTerms
    ) {
      return;
    }
    dispatch(setIsChangeSpvInvestmentTerms(isChangeSpvTermsValue.radioValue));
  }, [isChangeSpvTermsValue.radioValue]);

  useEffect(() => {
    if (!memberRoleValue || memberRoleValue.length === spvWelcomeBlock.changeMemberRoleInformation?.length) {
      return;
    }
    dispatch(setChangeMemberRoleInformation(memberRoleValue));
  }, [memberRoleValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(nextProgressStep());
  };

  return (
    <FormProvider {...methods}>
      <form className={s.welcomeSpvForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <Fieldset title={spvWelcomeFieldset.isFirstTimeSpv.title}>
          <RadioGroup
            radioList={spvWelcomeFieldset.isFirstTimeSpv.radioList || []}
            groupName={FieldsetWelcomeBlockName.isFirstTimeSpv}
          />
          {isFirstTimeSpvValue.radioValue === RadioValue.No && (
            <InputText
              isRequired
              placeholder={spvWelcomeFieldset.isFirstTimeSpv.inputText?.placeholder || ''}
              value={spvWelcomeFieldset.isFirstTimeSpv.inputText?.value || ''}
            />
          )}
        </Fieldset>
        <Fieldset title={spvWelcomeFieldset.isChangeSpvInvestmentStructure.title}>
          <RadioGroup
            radioList={spvWelcomeFieldset.isChangeSpvInvestmentStructure.radioList || []}
            groupName={FieldsetWelcomeBlockName.isChangeSpvInvestmentStructure}
          />
        </Fieldset>
        {isChangeSpvStructureValue.radioValue === RadioValue.No && (
          <Fieldset title={spvWelcomeFieldset.isChangeSpvInvestmentTerms.title}>
            <RadioGroup
              radioList={spvWelcomeFieldset.isChangeSpvInvestmentTerms.radioList || []}
              groupName={FieldsetWelcomeBlockName.isChangeSpvInvestmentTerms}
            />
          </Fieldset>
        )}
        {isChangeSpvStructureValue.radioValue === RadioValue.Yes && (
          <Fieldset title={spvWelcomeFieldset.changeMemberRoleInformation.title}>
            <CheckboxGroup
              groupName={FieldsetWelcomeBlockName.changeMemberRoleInformation}
              checkboxList={spvWelcomeFieldset.changeMemberRoleInformation.checkboxList || []}
            />
          </Fieldset>
        )}
        <Button size={ButtonSize.XL} color={ButtonColor.Green} Icon={ICONS.ArrowRight} type="submit" iconRight>
          Next, my SPV details
        </Button>
      </form>
    </FormProvider>
  );
};
export { SpvWelcomeBlock };
