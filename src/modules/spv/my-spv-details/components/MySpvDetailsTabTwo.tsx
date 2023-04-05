import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMySpvDetailsTabTwo, setMySpvDetailsTabTwo } from '../../../../store/reducers/spv';
import { FormProvider, useForm } from 'react-hook-form';
import { IMySPVDetailsTabTwo } from '../../../../types/projects/spv/mySpvDetails';
import { SectionTitle } from '../../../../components/section-title';
import { FieldsetSpvDetailsName, sectionTitle, spvDetailsFieldset } from '../consts';
import { MySpvDetailTabProps } from '../types';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { InputText } from '../../../../ui/inputs/input-text';

import s from '../styles.module.scss';
import { useDebounce } from '../../../../hooks/useDebounce';
import { defaultDebounceValue } from '../../../../consts/common';

const MySpvDetailsTabTwo: FC<MySpvDetailTabProps> = ({ changeCurrentLocalTab, nextTabHandler }) => {
  const mySpvDetailsTabTwo = useSelector(selectMySpvDetailsTabTwo);
  const dispatch = useDispatch();
  const methods = useForm<IMySPVDetailsTabTwo>({
    defaultValues: mySpvDetailsTabTwo,
  });
  const { watch } = methods;
  const all = watch();
  const cloneAll = structuredClone(all);
  const debounceInitialClosingDateTextValue = useDebounce(
    cloneAll.finalClosingDate.contentTextValue,
    defaultDebounceValue,
  );
  const debounceTermSpvTextValue = useDebounce(cloneAll.termSpv.contentTextValue, defaultDebounceValue);
  const debounceSpvExtensionTextValue = useDebounce(cloneAll.spvExtension.contentTextValue, defaultDebounceValue);

  useEffect(() => {
    dispatch(setMySpvDetailsTabTwo(cloneAll));
  }, [
    cloneAll.initialClosingDate.contentDateValue,
    cloneAll.initialClosingDate.radioValue,
    cloneAll.initialClosingDateTextValue,
    debounceInitialClosingDateTextValue,
    cloneAll.finalClosingDate.contentDateValue,
    cloneAll.finalClosingDate.radioValue,
    debounceTermSpvTextValue,
    cloneAll.termSpv.radioValue,
    debounceSpvExtensionTextValue,
    cloneAll.spvExtension.radioValue,
  ]);

  const onSubmit = (data: IMySPVDetailsTabTwo) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitle.title} subTitle={sectionTitle.subTitle} />
        <form className={s.spvDetailsFrom} onSubmit={methods.handleSubmit(onSubmit)}>
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
