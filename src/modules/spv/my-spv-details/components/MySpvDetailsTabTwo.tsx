import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectSpvMyDetailsTabTwo } from '../../../../store/reducers/spv';
import { FormProvider, useForm } from 'react-hook-form';
import { IMySpvDetails, IMySPVDetailsTabTwo } from '../../../../types/projects/spv/mySpvDetails';
import s from '../styles.module.scss';
import { SectionTitle } from '../../../../components/section-title';
import { sectionTitle } from '../consts';
import { MySpvDetailTabProps } from '../types';
import { NavigationButtons } from '../../../../components/navigation-buttons';

const MySpvDetailsTabTwo: FC<MySpvDetailTabProps> = ({ changeCurrentLocalTab, nextTabHandler }) => {
  const formDefaultValues = useSelector(selectSpvMyDetailsTabTwo);

  const methods = useForm<IMySPVDetailsTabTwo>({
    defaultValues: formDefaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.spvDetailsContainer}>
        <SectionTitle title={sectionTitle.title} subTitle={sectionTitle.subTitle} />
        <NavigationButtons nextButtonHandler={nextTabHandler} backButtonHandler={() => changeCurrentLocalTab('back')} />
      </div>
    </FormProvider>
  );
};

export { MySpvDetailsTabTwo };
