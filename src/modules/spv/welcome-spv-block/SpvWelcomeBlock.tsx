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
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
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
import { selectCurrentTab } from '../../../store/reducers/common';

import s from './styles.module.scss';

interface SpvWelcomeBlockProps {
  nextTabHandler: () => void;
}

const SpvWelcomeBlock: FC<SpvWelcomeBlockProps> = ({ nextTabHandler }) => {
  const currentTab = useSelector(selectCurrentTab);

  const spvWelcomeBlock = useSelector(selectSpvWelcomeBlock);
  const dispatch = useDispatch();

  const methods = useForm<ISpvWelcomeBlock>({
    defaultValues: spvWelcomeBlock,
  });
  const { watch } = methods;

  const isFirstTimeSpvValue = watch(FieldsetWelcomeBlockName.isFirstTimeSpv);
  const previousSpvNameValue = useDebounce(watch('previousSpvName'), 1000);
  const isChangeSpvStructureValue = watch(FieldsetWelcomeBlockName.isChangeSpvInvestmentStructure);
  const isChangeSpvTermsValue = watch(FieldsetWelcomeBlockName.isChangeSpvInvestmentTerms);
  const memberRoleValue = watch(FieldsetWelcomeBlockName.changeMemberRoleInformation);

  // console.log(previousSpvNameValue);
  useEffect(() => {
    if (!isFirstTimeSpvValue || spvWelcomeBlock.isFirstTimeSpv === isFirstTimeSpvValue) {
      return;
    }
    dispatch(setIsFirstTimeSpv(isFirstTimeSpvValue));
  }, [isFirstTimeSpvValue]);

  useEffect(() => {
    if (spvWelcomeBlock.previousSpvName === previousSpvNameValue) {
      return;
    }
    dispatch(setPreviousSpvName(previousSpvNameValue));
  }, [previousSpvNameValue]);

  useEffect(() => {
    if (!isChangeSpvStructureValue || isChangeSpvStructureValue === spvWelcomeBlock.isChangeSpvInvestmentStructure) {
      return;
    }
    dispatch(setIsChangeSpvInvestmentStructure(isChangeSpvStructureValue));
  }, [isChangeSpvStructureValue]);

  useEffect(() => {
    if (!isChangeSpvTermsValue || isChangeSpvTermsValue === spvWelcomeBlock.isChangeSpvInvestmentTerms) {
      return;
    }
    dispatch(setIsChangeSpvInvestmentTerms(isChangeSpvTermsValue));
  }, [isChangeSpvTermsValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    nextTabHandler();
  };

  useEffect(() => {
    if (!memberRoleValue || memberRoleValue.length === spvWelcomeBlock.changeMemberRoleInformation?.length) {
      return;
    }
    dispatch(setChangeMemberRoleInformation(memberRoleValue));
  }, [memberRoleValue]);

  if (currentTab !== 0) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <form className={s.welcomeSpvForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <Fieldset title={spvWelcomeFieldset.isFirstTimeSpv.title}>
          <RadioGroup
            radioList={spvWelcomeFieldset.isFirstTimeSpv.radioList || []}
            groupName={FieldsetWelcomeBlockName.isFirstTimeSpv}
          />
          {isFirstTimeSpvValue === RadioValue.No && (
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
        {isChangeSpvStructureValue === RadioValue.No && (
          <Fieldset title={spvWelcomeFieldset.isChangeSpvInvestmentTerms.title}>
            <RadioGroup
              radioList={spvWelcomeFieldset.isChangeSpvInvestmentTerms.radioList || []}
              groupName={FieldsetWelcomeBlockName.isChangeSpvInvestmentTerms}
            />
          </Fieldset>
        )}
        {isChangeSpvStructureValue === RadioValue.Yes && (
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
