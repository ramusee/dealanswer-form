import React from 'react';
import { SpvWelcomeBlock } from '../../modules/spv/welcome-spv-block';
import { MySpvDetails } from '../../modules/spv/my-spv-details';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTab, setCurrentTab } from '../../store/reducers/common';

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
    </>
  );
};

export { SpvPage };
