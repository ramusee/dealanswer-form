import React, { useEffect } from 'react';
import { FieldsetName, spvWelcomeFieldset } from './consts';

import { RadioGroup } from '../../../components/element-groups/radio-group';
import { FormProvider, useForm } from 'react-hook-form';
import { InputText } from '../../../ui/inputs/input-text';
import { Button } from '../../../ui/button';
import { Fieldset } from '../../../components/fieldset/Fieldset';
import { CheckboxGroup } from '../../../components/element-groups/checkbox-group';

import { ButtonColor, ButtonSize } from '../../../types/ui/button';
import { ICONS } from '../../../consts/icons';
import { ISpvWelcomeBlock } from '../../../types/spv/welcomeBlock';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectChangeMemberRoleInformation,
  selectIsChangeSpvInvestStr,
  selectIsChangeSpvInvestTerms,
  selectIsFirstTimeSpv,
  selectPreviousSpvName,
  setChangeMemberRoleInformation,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setPreviousSpvName,
} from '../../../store/reducers/spv';

import s from './styles.module.scss';
import { useDebounce } from '../../../hooks/useDebounce';

const no = 'No';

const SpvWelcomeBlock = () => {
  const isFirstTimeSpv = useSelector(selectIsFirstTimeSpv);
  const isChangeSpvInvestmentStructure = useSelector(selectIsChangeSpvInvestStr);
  const isChangeSpvInvestmentTerms = useSelector(selectIsChangeSpvInvestTerms);
  const previousSpvName = useSelector(selectPreviousSpvName);
  const changeMemberRoleInformation = useSelector(selectChangeMemberRoleInformation);
  const dispatch = useDispatch();

  const methods = useForm<ISpvWelcomeBlock>({
    defaultValues: {
      isFirstTimeSpv,
      previousSpvName,
      isChangeSpvInvestmentStructure,
      isChangeSpvInvestmentTerms,
      changeMemberRoleInformation,
    },
  });
  const { watch } = methods;

  const isFirstTimeSpvValue = watch(FieldsetName.isFirstTimeSpv);
  const previousSpvNameValue = useDebounce(watch('previousSpvName'), 1000);
  const isChangeSpvStructureValue = watch(FieldsetName.isChangeSpvInvestmentStructure);
  const isChangeSpvTermsValue = watch(FieldsetName.isChangeSpvInvestmentTerms);
  const memberRoleValue = watch(FieldsetName.changeMemberRoleInformation);

  useEffect(() => {
    if (!isFirstTimeSpvValue || isFirstTimeSpv === isFirstTimeSpvValue) {
      return;
    }
    dispatch(setIsFirstTimeSpv(isFirstTimeSpvValue));
  }, [isFirstTimeSpvValue]);

  useEffect(() => {
    if (previousSpvName === previousSpvNameValue) {
      return;
    }
    dispatch(setPreviousSpvName(previousSpvNameValue));
  }, [previousSpvNameValue]);

  useEffect(() => {
    if (!isChangeSpvStructureValue || isChangeSpvStructureValue === isChangeSpvInvestmentStructure) {
      return;
    }
    dispatch(setIsChangeSpvInvestmentStructure(isChangeSpvStructureValue));
  }, [isChangeSpvStructureValue]);

  useEffect(() => {
    if (!isChangeSpvTermsValue || isChangeSpvTermsValue === isChangeSpvInvestmentTerms) {
      return;
    }
    dispatch(setIsChangeSpvInvestmentTerms(isChangeSpvTermsValue));
  }, [isChangeSpvTermsValue]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (!memberRoleValue || memberRoleValue.length === changeMemberRoleInformation?.length) {
      return;
    }
    dispatch(setChangeMemberRoleInformation(memberRoleValue));
  }, [memberRoleValue]);

  return (
    <FormProvider {...methods}>
      <form className={s.welcomeSpvContainer} onSubmit={methods.handleSubmit(onSubmit)}>
        <Fieldset title={spvWelcomeFieldset.isFirstTimeSpv.title}>
          <RadioGroup
            radioList={spvWelcomeFieldset.isFirstTimeSpv.radioList || []}
            groupName={FieldsetName.isFirstTimeSpv}
          />
          {isFirstTimeSpvValue === no && (
            <InputText
              isRequired
              placeholder={spvWelcomeFieldset.isFirstTimeSpv.inputPlaceholder || ''}
              value={'previousSpvName'}
            />
          )}
        </Fieldset>
        <Fieldset title={spvWelcomeFieldset.isChangeSpvInvestmentStructure.title}>
          <RadioGroup
            radioList={spvWelcomeFieldset.isChangeSpvInvestmentStructure.radioList || []}
            groupName={FieldsetName.isChangeSpvInvestmentStructure}
          />
        </Fieldset>
        <Fieldset title={spvWelcomeFieldset.isChangeSpvInvestmentTerms.title}>
          <RadioGroup
            radioList={spvWelcomeFieldset.isChangeSpvInvestmentTerms.radioList || []}
            groupName={FieldsetName.isChangeSpvInvestmentTerms}
          />
        </Fieldset>
        <Fieldset title={spvWelcomeFieldset.changeMemberRoleInformation.title}>
          <CheckboxGroup
            groupName={FieldsetName.changeMemberRoleInformation}
            checkboxList={spvWelcomeFieldset.changeMemberRoleInformation.checkboxList || []}
          />
        </Fieldset>
        <Button size={ButtonSize.XL} color={ButtonColor.Green} Icon={ICONS.ArrowRight} type="submit">
          Next, my SPV details
        </Button>
      </form>
    </FormProvider>
  );
};
export { SpvWelcomeBlock };
