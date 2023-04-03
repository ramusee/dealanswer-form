import React, { FC, useEffect } from 'react';
import { SectionTitle } from '../../../../components/section-title';
import { FieldsetSpvDetailsName, sectionTitle, spvDetailsFieldset } from '../consts';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { InputText } from '../../../../ui/inputs/input-text';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { FormProvider, useForm } from 'react-hook-form';
import { IMySpvDetailsTabOne } from '../../../../types/projects/spv/mySpvDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMySpvDetailsTabOne,
  setMinimumCommitment,
  setMinimumCommitmentTextValue,
  setSpvName,
  setTargetInvestAmount,
} from '../../../../store/reducers/spv';
import { MySpvDetailTabProps } from '../types';
import { useDebounce } from '../../../../hooks/useDebounce';

import { defaultDebounceValue } from '../../../../consts/common';

import s from '../styles.module.scss';

const MySpvDetailsTabOne: FC<MySpvDetailTabProps> = ({ changeCurrentLocalTab, previousTabHandler }) => {
  const mySpvDetailsTabOne = useSelector(selectMySpvDetailsTabOne);
  const dispatch = useDispatch();

  const methods = useForm<IMySpvDetailsTabOne>({
    defaultValues: mySpvDetailsTabOne,
  });

  const { watch } = methods;
  const spvNameValue = useDebounce(watch(FieldsetSpvDetailsName.spvName), defaultDebounceValue);
  const targetInvestAmountValue = useDebounce(
    watch(FieldsetSpvDetailsName.targetInvestmentAmount),
    defaultDebounceValue,
  );
  const minimumCommitmentValue = watch(`${FieldsetSpvDetailsName.minimumCommitment}.radioValue`);
  const minimumCommitmentTextValue = useDebounce(
    watch(`${FieldsetSpvDetailsName.minimumCommitment}.contentValue`),
    defaultDebounceValue,
  );

  useEffect(() => {
    if (mySpvDetailsTabOne.spvName === spvNameValue) {
      return;
    }
    dispatch(setSpvName(spvNameValue));
  }, [spvNameValue]);

  useEffect(() => {
    if (mySpvDetailsTabOne.targetInvestmentAmount === targetInvestAmountValue) {
      return;
    }
    dispatch(setTargetInvestAmount(targetInvestAmountValue));
  }, [targetInvestAmountValue]);

  useEffect(() => {
    if (mySpvDetailsTabOne.minimumCommitment.radioValue === minimumCommitmentValue) {
      return;
    }
    dispatch(setMinimumCommitment(minimumCommitmentValue));
  }, [minimumCommitmentValue]);

  useEffect(() => {
    if (mySpvDetailsTabOne.minimumCommitment.contentValue === minimumCommitmentTextValue) {
      return;
    }
    dispatch(setMinimumCommitmentTextValue(minimumCommitmentTextValue));
  }, [minimumCommitmentTextValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    changeCurrentLocalTab(2);
  };
  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitle.title} subTitle={sectionTitle.subTitle} />
        <form className={s.spvDetailsFrom} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset title={spvDetailsFieldset.spvName.title} subTitle={spvDetailsFieldset.spvName.subTitle}>
            <InputText
              value={spvDetailsFieldset.spvName.inputText?.value || ''}
              placeholder={spvDetailsFieldset.spvName.inputText?.placeholder || ''}
              isRequired
            />
          </Fieldset>
          <Fieldset
            title={spvDetailsFieldset.targetInvestmentAmount.title}
            subTitle={spvDetailsFieldset.targetInvestmentAmount.subTitle}
          >
            <InputText
              value={spvDetailsFieldset.targetInvestmentAmount.inputText?.value || ''}
              placeholder={spvDetailsFieldset.targetInvestmentAmount.inputText?.placeholder || ''}
              type="number"
              isRequired
            />
          </Fieldset>
          <Fieldset
            title={spvDetailsFieldset.minimumCommitment.title}
            subTitle={spvDetailsFieldset.minimumCommitment.subTitle}
          >
            <RadioGroup
              radioList={spvDetailsFieldset.minimumCommitment.radioList || []}
              groupName={FieldsetSpvDetailsName.minimumCommitment}
            />
          </Fieldset>
          <NavigationButtons backButtonHandler={previousTabHandler} />
        </form>
      </div>
    </FormProvider>
  );
};
export { MySpvDetailsTabOne };
