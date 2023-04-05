import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { sectionTitleInvestmentTerms } from '../consts';
import { IMySPVDetailsTabTwo } from '../../../../types/projects/spv/mySpvDetails';
import { SectionTitle } from '../../../../components/section-title';
import { InvestmentTermsTabProps } from '../types';

import s from '../styles.module.scss';

const InvestmentTermsTabOne: FC<InvestmentTermsTabProps> = ({
  previousTabHandler,
  nextTabHandler,
  changeCurrentLocalTab,
}) => {
  const dispatch = useDispatch();
  const methods = useForm<IMySPVDetailsTabTwo>();
  const { watch } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className={s.investmentTermsContainer}>
        <SectionTitle title={sectionTitleInvestmentTerms} />
        <form className={s.spvDetailsFrom} onSubmit={methods.handleSubmit(onSubmit)}></form>
      </div>
    </FormProvider>
  );
};

export { InvestmentTermsTabOne };
