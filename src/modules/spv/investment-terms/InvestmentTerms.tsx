import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InvestmentTermsTabOne } from './components/InvestmentTermsTabOne';
import { selectInvestTermsCurrentTab, setInvestmentTermsCurrentTab } from '../../../store/reducers/spv';
import { InvestmentTermsTabTwo } from './components/InvestmentTermsTabTwo';
import { InvestmentTermsTabThree } from './components/InvestmentTermsTabThree';

const InvestmentTerms: FC = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector(selectInvestTermsCurrentTab);
  const changeCurrentLocalTab = (tab: number) => {
    dispatch(setInvestmentTermsCurrentTab(tab));
  };

  return (
    <>
      {currentTab === 1 && <InvestmentTermsTabOne changeCurrentTab={changeCurrentLocalTab} />}
      {currentTab === 2 && <InvestmentTermsTabTwo changeCurrentTab={changeCurrentLocalTab} />}
      {currentTab === 3 && <InvestmentTermsTabThree changeCurrentTab={changeCurrentLocalTab} />}
    </>
  );
};

export { InvestmentTerms };
