import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { FieldsetSpvDetailsName, sectionTitleMySpvDetails, spvDetailsFieldset } from '../consts';
import { IMySpvDetailsTabOne } from '../../../../types/projects/spv/mySpvDetails';
import { MySpvDetailsTabProps } from '../types';

import { SectionTitle } from '../../../../components/section-title';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { InputText } from '../../../../ui/inputs/input-text';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { useDebounce } from '../../../../hooks/useDebounce';
import { selectMySpvDetailsTabOne, setMySpvDetailsTabOne } from '../../../../store/reducers/spv';
import { previousProgressStep } from '../../../../store/reducers/common';

import { defaultDebounceValue } from '../../../../consts/common';

import s from '../styles.module.scss';

const MySpvDetailsTabOne: FC<MySpvDetailsTabProps> = ({ changeCurrentTab }) => {
  const mySpvDetailsTabOne = useSelector(selectMySpvDetailsTabOne);
  const dispatch = useDispatch();

  const methods = useForm<IMySpvDetailsTabOne>({
    defaultValues: mySpvDetailsTabOne,
  });
  const { watch } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const spvNameValue = useDebounce(cloneAllFields.spvName, defaultDebounceValue);
  const targetInvestAmountValue = useDebounce(cloneAllFields.targetInvestmentAmount, defaultDebounceValue);
  const minimumCommitmentTextValue = useDebounce(
    cloneAllFields.minimumCommitment.contentTextValue,
    defaultDebounceValue,
  );

  useEffect(() => {
    dispatch(setMySpvDetailsTabOne(cloneAllFields));
  }, [spvNameValue, targetInvestAmountValue, cloneAllFields.minimumCommitment.radioValue, minimumCommitmentTextValue]);

  const onSubmit = (data: IMySpvDetailsTabOne) => {
    console.log(data);
    changeCurrentTab(2);
  };
  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitleMySpvDetails.title} subTitle={sectionTitleMySpvDetails.subTitle} />
        <form className={s.spvDetailsForm} onSubmit={methods.handleSubmit(onSubmit)}>
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
          <NavigationButtons backButtonHandler={() => dispatch(previousProgressStep())} />
        </form>
      </div>
    </FormProvider>
  );
};
export { MySpvDetailsTabOne };
