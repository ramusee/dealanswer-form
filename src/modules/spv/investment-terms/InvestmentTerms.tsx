import React, { FC } from 'react';
import { InvestmentTermsTabOne } from './components/InvestmentTermsTabOne';
import { InvestmentTermsProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTab } from '../../../store/reducers/common';

const InvestmentTerms: FC<InvestmentTermsProps> = ({ nextTabHandler, previousTabHandler }) => {
  const currentTab = useSelector(selectCurrentTab);
  const dispatch = useDispatch();

  const changeCurrentLocalTab = (tab: number) => {
    nextTabHandler();
  };

  if (currentTab !== 3) {
    return null;
  }
  return (
    <>
      <InvestmentTermsTabOne previousTabHandler={previousTabHandler} changeCurrentLocalTab={changeCurrentLocalTab} />
    </>
  );
};

export { InvestmentTerms };
