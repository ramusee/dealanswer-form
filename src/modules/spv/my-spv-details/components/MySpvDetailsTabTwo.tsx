import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { FieldsetSpvDetailsName, sectionTitleMySpvDetails, spvDetailsFieldset } from '../consts';
import { defaultDebounceValue } from '../../../../consts/common';
import { IMySPVDetailsTabTwo } from '../../../../types/projects/spv/mySpvDetails';
import { MySpvDetailsTabProps } from '../types';
import { useDebounce } from '../../../../hooks/useDebounce';

import { selectMySpvDetailsTabTwo, setMySpvDetailsTabTwo } from '../../../../store/reducers/spv';
import { SectionTitle } from '../../../../components/section-title';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { InputText } from '../../../../ui/inputs/input-text';

import s from '../styles.module.scss';
import { nextProgressStep } from '../../../../store/reducers/common';

const MySpvDetailsTabTwo: FC<MySpvDetailsTabProps> = ({ changeCurrentTab }) => {
  const mySpvDetailsTabTwo = useSelector(selectMySpvDetailsTabTwo);
  const dispatch = useDispatch();
  const methods = useForm<IMySPVDetailsTabTwo>({
    defaultValues: mySpvDetailsTabTwo,
  });
  const { watch, handleSubmit } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const debouncedInitialClosingDateTextValue = useDebounce(
    cloneAllFields.initialClosingDateTextValue,
    defaultDebounceValue,
  );
  const debouncedFinalClosingDateTextValue = useDebounce(
    cloneAllFields.finalClosingDate.contentTextValue,
    defaultDebounceValue,
  );
  const debouncedTermSpvTextValue = useDebounce(cloneAllFields.termSpv.contentTextValue, defaultDebounceValue);
  const debouncedSpvExtensionTextValue = useDebounce(
    cloneAllFields.spvExtension.contentTextValue,
    defaultDebounceValue,
  );

  const isRequiredInitialClosingText =
    cloneAllFields.initialClosingDate.radioValue === 'When the aggregate Commitments equal to or exceed';

  useEffect(() => {
    dispatch(setMySpvDetailsTabTwo(cloneAllFields));
  }, [
    cloneAllFields.initialClosingDate.radioValue,
    cloneAllFields.initialClosingDate.contentDateValue,
    debouncedInitialClosingDateTextValue,
    cloneAllFields.finalClosingDate.radioValue,
    cloneAllFields.finalClosingDate.contentDateValue,
    debouncedFinalClosingDateTextValue,
    debouncedTermSpvTextValue,
    cloneAllFields.termSpv.radioValue,
    cloneAllFields.spvExtension.radioValue,
    debouncedSpvExtensionTextValue,
  ]);

  const onSubmit = (data: IMySPVDetailsTabTwo) => {
    console.log(data);
    changeCurrentTab(3);
  };
  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitleMySpvDetails.title} subTitle={sectionTitleMySpvDetails.subTitle} />
        <form className={s.spvDetailsForm} onSubmit={handleSubmit(onSubmit)}>
          <Fieldset
            title={spvDetailsFieldset.initialClosingDate.title}
            subTitle={spvDetailsFieldset.initialClosingDate.subTitle}
          >
            <div className={s.initialClosingContent}>
              <RadioGroup
                radioList={spvDetailsFieldset.initialClosingDate.radioList || []}
                groupName={FieldsetSpvDetailsName.initialClosingDate}
              />
              <InputText
                value={spvDetailsFieldset.initialClosingDate.inputText?.value || ''}
                placeholder={spvDetailsFieldset.initialClosingDate.inputText?.placeholder || ''}
                type="number"
                isRequired={isRequiredInitialClosingText}
              />
            </div>
          </Fieldset>
          <Fieldset
            title={spvDetailsFieldset.finalClosingDate.title}
            subTitle={spvDetailsFieldset.finalClosingDate.subTitle}
          >
            <RadioGroup
              radioList={spvDetailsFieldset.finalClosingDate.radioList || []}
              groupName={FieldsetSpvDetailsName.finalClosingDate}
            />
          </Fieldset>
          <Fieldset title={spvDetailsFieldset.termSpv.title} subTitle={spvDetailsFieldset.termSpv.subTitle}>
            <RadioGroup
              radioList={spvDetailsFieldset.termSpv.radioList || []}
              groupName={FieldsetSpvDetailsName.termSpv}
            />
          </Fieldset>
          <Fieldset title={spvDetailsFieldset.spvExtension.title} subTitle={spvDetailsFieldset.spvExtension.subTitle}>
            <RadioGroup
              radioList={spvDetailsFieldset.spvExtension.radioList || []}
              groupName={FieldsetSpvDetailsName.spvExtension}
            />
          </Fieldset>
          <NavigationButtons backButtonHandler={() => changeCurrentTab(1)} nextButtonTitle="Investment Terms" />
        </form>
      </div>
    </FormProvider>
  );
};

export { MySpvDetailsTabTwo };
