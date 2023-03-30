import React, { FC, useEffect } from 'react';
import s from '../styles.module.scss';
import { SectionTitle } from '../../../../components/section-title';
import { FieldsetSpvDetailsName, sectionTitle, spvDetailsFieldset } from '../consts';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { InputText } from '../../../../ui/inputs/input-text';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { FormProvider, useForm } from 'react-hook-form';
import { IMySpvDetails, IMySpvDetailsTabOne } from '../../../../types/projects/spv/mySpvDetails';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpvMyDetailsTabOne, setMySpvDetailsTabOneForm } from '../../../../store/reducers/spv';
import { MySpvDetailTabProps } from '../types';
import { useDebounce } from '../../../../hooks/useDebounce';

const MySpvDetailsTabOne: FC<MySpvDetailTabProps> = ({ changeCurrentLocalTab, previousTabHandler }) => {
  const formDefaultValues = useSelector(selectSpvMyDetailsTabOne);
  const dispatch = useDispatch();

  const methods = useForm<IMySpvDetailsTabOne>({
    defaultValues: formDefaultValues,
  });
  const { watch } = methods;

  const allFieldsValue = watch();
  console.log(allFieldsValue);

  useEffect(() => {
    dispatch(setMySpvDetailsTabOneForm);
  }, [allFieldsValue]);
  const onSubmit = (data: any) => {
    console.log(data);
    changeCurrentLocalTab('next');
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
