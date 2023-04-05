import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTab } from '../../../store/reducers/common';
import { MySpvDetailsTabOne } from './components/MySpvDetailsTabOne';
import { MySpvDetailsProps } from './types';
import { MySpvDetailsTabTwo } from './components/MySpvDetailsTabTwo';
import { selectMySpvDetailsCurrentLocalTab, setMySpvDetailCurrentLocalTab } from '../../../store/reducers/spv';

const MySpvDetails: FC<MySpvDetailsProps> = ({ nextTabHandler, previousTabHandler }) => {
  const currentTab = useSelector(selectCurrentTab);
  const currentLocalTab = useSelector(selectMySpvDetailsCurrentLocalTab);
  const dispatch = useDispatch();

  const changeCurrentLocalTab = (tab: number) => {
    dispatch(setMySpvDetailCurrentLocalTab(tab));
    nextTabHandler();
  };

  if (currentTab !== 1) {
    return null;
  }

  return (
    <>
      {currentLocalTab === 1 && (
        <MySpvDetailsTabOne changeCurrentLocalTab={changeCurrentLocalTab} previousTabHandler={previousTabHandler} />
      )}
      {currentLocalTab === 2 && (
        <MySpvDetailsTabTwo changeCurrentLocalTab={changeCurrentLocalTab} nextTabHandler={nextTabHandler} />
      )}
    </>
  );
};

export { MySpvDetails };
