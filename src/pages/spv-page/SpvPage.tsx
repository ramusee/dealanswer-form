import React from 'react';
import { useSelector } from 'react-redux';

import { SpvWelcomeBlock } from '../../modules/spv/welcome-spv-block';
import { MySpvDetails } from '../../modules/spv/my-spv-details';
import { InvestmentTerms } from '../../modules/spv/investment-terms';
import { selectCurrentProgressStep } from '../../store/reducers/common';
import { InvestmentStructure } from '../../modules/spv/investment-structure';

const SpvPage = () => {
  const currentProgressStep = useSelector(selectCurrentProgressStep);

  return (
    <>
      {currentProgressStep === 0 && <SpvWelcomeBlock />}
      {currentProgressStep === 1 && <MySpvDetails />}
      {currentProgressStep === 2 && <InvestmentTerms />}
      {currentProgressStep === 3 && <InvestmentStructure />}
    </>
  );
};

export { SpvPage };
