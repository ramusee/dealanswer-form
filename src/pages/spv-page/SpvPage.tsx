import React from 'react';
import { SpvWelcomeBlock } from '../../modules/spv/welcome-spv-block';
import { MySpvDetails } from '../../modules/spv/my-spv-details';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTab, setCurrentTab } from '../../store/reducers/common';
import { InvestmentTerms } from '../../modules/spv/investment-terms';

const SpvPage = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector(selectCurrentTab);

  const nextTabButtonHandler = () => {
    dispatch(setCurrentTab(currentTab + 1));
  };

  const previousTabButtonHandler = () => {
    dispatch(setCurrentTab(currentTab - 1));
  };

  return (
    <>
      <SpvWelcomeBlock nextTabHandler={nextTabButtonHandler} />
      <MySpvDetails nextTabHandler={nextTabButtonHandler} previousTabHandler={previousTabButtonHandler} />
      <InvestmentTerms nextTabHandler={nextTabButtonHandler} previousTabHandler={previousTabButtonHandler} />
    </>
  );
};

export { SpvPage };
