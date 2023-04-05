import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { FieldsetSpvDetailsName, sectionTitleMySpvDetails, spvDetailsFieldset } from '../consts';
import { defaultDebounceValue } from '../../../../consts/common';
import { IMySPVDetailsTabTwo } from '../../../../types/projects/spv/mySpvDetails';
import { MySpvDetailTabProps } from '../types';
import { useDebounce } from '../../../../hooks/useDebounce';

import { selectMySpvDetailsTabTwo, setMySpvDetailsTabTwo } from '../../../../store/reducers/spv';
import { SectionTitle } from '../../../../components/section-title';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { InputText } from '../../../../ui/inputs/input-text';

import s from '../styles.module.scss';

const MySpvDetailsTabTwo: FC<MySpvDetailTabProps> = ({ changeCurrentLocalTab, nextTabHandler }) => {
  const mySpvDetailsTabTwo = useSelector(selectMySpvDetailsTabTwo);
  const dispatch = useDispatch();
  const methods = useForm<IMySPVDetailsTabTwo>({
    defaultValues: mySpvDetailsTabTwo,
  });
  const { watch } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const debounceInitialClosingDateTextValue = useDebounce(
    cloneAllFields.initialClosingDateTextValue,
    defaultDebounceValue,
  );
  const debounceFinalClosingDateTextValue = useDebounce(
    cloneAllFields.finalClosingDate.contentTextValue,
    defaultDebounceValue,
  );
  const debounceTermSpvTextValue = useDebounce(cloneAllFields.termSpv.contentTextValue, defaultDebounceValue);
  const debounceSpvExtensionTextValue = useDebounce(cloneAllFields.spvExtension.contentTextValue, defaultDebounceValue);

  useEffect(() => {
    dispatch(setMySpvDetailsTabTwo(cloneAllFields));
  }, [
    cloneAllFields.initialClosingDate.radioValue,
    cloneAllFields.initialClosingDate.contentDateValue,
    debounceInitialClosingDateTextValue,
    cloneAllFields.finalClosingDate.radioValue,
    cloneAllFields.finalClosingDate.contentDateValue,
    debounceFinalClosingDateTextValue,
    debounceTermSpvTextValue,
    cloneAllFields.termSpv.radioValue,
    cloneAllFields.spvExtension.radioValue,
    debounceSpvExtensionTextValue,
  ]);

  const onSubmit = (data: IMySPVDetailsTabTwo) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitleMySpvDetails.title} subTitle={sectionTitleMySpvDetails.subTitle} />
        <form className={s.spvDetailsForm} onSubmit={methods.handleSubmit(onSubmit)}>
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
          <NavigationButtons backButtonHandler={() => changeCurrentLocalTab(1)} />
        </form>
      </div>
    </FormProvider>
  );
};

export { MySpvDetailsTabTwo };
