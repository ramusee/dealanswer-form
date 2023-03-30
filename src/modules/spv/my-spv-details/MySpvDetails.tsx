import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTab } from '../../../store/reducers/common';
import { MySpvDetailsTabOne } from './components/MySpvDetailsTabOne';
import { MySpvDetailsProps } from './types';
import { MySpvDetailsTabTwo } from './components/MySpvDetailsTabTwo';

const MySpvDetails: FC<MySpvDetailsProps> = ({ nextTabHandler, previousTabHandler }) => {
  const [currentLocalTab, setCurrentLocalTab] = useState<number>(1);
  const currentTab = useSelector(selectCurrentTab);

  const changeCurrentLocalTab = (step: string) => {
    step === 'next' ? setCurrentLocalTab(prevState => prevState + 1) : setCurrentLocalTab(prevState => prevState - 1);
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
