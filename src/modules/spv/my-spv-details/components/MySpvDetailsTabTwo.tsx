import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMySpvDetailsTabTwo,
  setFinalClosingDate,
  setInitialClosingDate,
  setInitialClosingDateTextValue,
  setSpvExtension,
  setTermSpv,
} from '../../../../store/reducers/spv';
import { FormProvider, useForm } from 'react-hook-form';
import { IMySPVDetailsTabTwo } from '../../../../types/projects/spv/mySpvDetails';
import { SectionTitle } from '../../../../components/section-title';
import { FieldsetSpvDetailsName, sectionTitle, spvDetailsFieldset } from '../consts';
import { MySpvDetailTabProps } from '../types';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { InputText } from '../../../../ui/inputs/input-text';
import { useDebounce } from '../../../../hooks/useDebounce';
import s from '../styles.module.scss';

const MySpvDetailsTabTwo: FC<MySpvDetailTabProps> = ({ changeCurrentLocalTab, nextTabHandler }) => {
  const mySpvDetailsTabTwo = useSelector(selectMySpvDetailsTabTwo);
  const dispatch = useDispatch();
  const methods = useForm<IMySPVDetailsTabTwo>({
    defaultValues: mySpvDetailsTabTwo,
  });
  const { watch } = methods;
  const initialClosingDateValue = watch(FieldsetSpvDetailsName.initialClosingDate);
  const finalClosingValue = watch(FieldsetSpvDetailsName.finalClosingDate);
  const termSpvValue = watch(FieldsetSpvDetailsName.termSpv);
  const spvExtensionValue = watch(FieldsetSpvDetailsName.spvExtension);
  const initialClosingDateTextValue = useDebounce(watch('initialClosingDateTextValue'), 1000);

  console.log(initialClosingDateTextValue);
  useEffect(() => {
    if (!initialClosingDateValue || mySpvDetailsTabTwo.initialClosingDate === initialClosingDateValue) {
      return;
    }
    dispatch(setInitialClosingDate(initialClosingDateValue));
  }, [initialClosingDateValue]);

  useEffect(() => {
    if (!finalClosingValue || mySpvDetailsTabTwo.finalClosingDate === finalClosingValue) {
      return;
    }
    dispatch(setFinalClosingDate(finalClosingValue));
  }, [finalClosingValue]);

  useEffect(() => {
    if (!termSpvValue || mySpvDetailsTabTwo.termSpv === termSpvValue) {
      return;
    }
    dispatch(setTermSpv(termSpvValue));
  }, [termSpvValue]);

  useEffect(() => {
    if (!spvExtensionValue || mySpvDetailsTabTwo.spvExtension === spvExtensionValue) {
      return;
    }
    dispatch(setSpvExtension(spvExtensionValue));
  }, [spvExtensionValue]);

  useEffect(() => {
    if (
      !initialClosingDateTextValue ||
      mySpvDetailsTabTwo.initialClosingDateTextValue === initialClosingDateTextValue ||
      typeof initialClosingDateValue !== 'string'
    ) {
      return;
    }

    dispatch(setInitialClosingDateTextValue);
  }, [initialClosingDateTextValue]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitle.title} subTitle={sectionTitle.subTitle} />
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
        <NavigationButtons backButtonHandler={() => changeCurrentLocalTab('back')} />
      </div>
    </FormProvider>
  );
};

export { MySpvDetailsTabTwo };
