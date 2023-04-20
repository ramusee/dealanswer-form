import React from 'react';
import { useSelector } from 'react-redux';

import { SpvWelcomeBlock } from '../../modules/spv/welcome-block-spv';
import { MySpvDetails } from '../../modules/spv/my-spv-details';
import { InvestmentTerms } from '../../modules/spv/investment-terms';
import { selectCurrentProgressStep } from '../../store/reducers/common';
import { InvestmentStructure } from '../../modules/spv/investment-structure';
import { AddOns } from '../../modules/spv/add-ons';

const SpvPage = () => {
  const currentProgressStep = useSelector(selectCurrentProgressStep);

  return (
    <>
      {currentProgressStep === 0 && <SpvWelcomeBlock />}
      {currentProgressStep === 1 && <MySpvDetails />}
      {currentProgressStep === 2 && <InvestmentTerms />}
      {currentProgressStep === 3 && <InvestmentStructure />}
      {currentProgressStep === 4 && <AddOns />}
    </>
  );
};

export { SpvPage };
