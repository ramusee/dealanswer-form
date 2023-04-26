import React from 'react';
import { useDispatch } from 'react-redux';

import { SectionTitle } from '../../../components/section-title';
import { sectionTitleInvestmentStructure } from './consts';
import { NavigationButtons } from '../../../components/navigation-buttons';
import { previousProgressStep } from '../../../store/reducers/common';
import { InitialMembers } from './components/InitialMembers';

import s from './styles.module.scss';

const InvestmentStructure = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.investmentStructureContainer}>
      <SectionTitle title={sectionTitleInvestmentStructure} />
      <InitialMembers />
      <NavigationButtons backButtonHandler={() => dispatch(previousProgressStep())} nextButtonTitle="Add-Ons" />
    </div>
  );
};

export { InvestmentStructure };
