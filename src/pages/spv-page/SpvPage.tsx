import React from 'react';
import { SpvWelcomeBlock } from '../../modules/spv/welcome-spv-block';
import { MySpvDetails } from '../../modules/spv/my-spv-details';
import { useDispatch, useSelector } from 'react-redux';
import { InvestmentTerms } from '../../modules/spv/investment-terms';
import { selectCurrentProgressStep } from '../../store/reducers/common';

const SpvPage = () => {
  const dispatch = useDispatch();

  const currentProgressStep = useSelector(selectCurrentProgressStep);

  return (
    <>
      {currentProgressStep === 0 && <SpvWelcomeBlock />}
      {currentProgressStep === 1 && <MySpvDetails />}
      {currentProgressStep === 2 && <InvestmentTerms />}
    </>
  );
};

export { SpvPage };
