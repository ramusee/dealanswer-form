import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MySpvDetailsTabOne } from './components/MySpvDetailsTabOne';
import { MySpvDetailsTabTwo } from './components/MySpvDetailsTabTwo';
import { selectMySpvDetailsCurrentTab, setMySpvDetailCurrentTab } from '../../../store/reducers/spv';

const MySpvDetails: FC = () => {
  const currentLocalTab = useSelector(selectMySpvDetailsCurrentTab);
  const dispatch = useDispatch();

  const changeCurrentTab = (tab: number) => {
    dispatch(setMySpvDetailCurrentTab(tab));
  };

  return (
    <>
      {currentLocalTab === 1 && <MySpvDetailsTabOne changeCurrentTab={changeCurrentTab} />}
      {currentLocalTab === 2 && <MySpvDetailsTabTwo changeCurrentTab={changeCurrentTab} />}
    </>
  );
};

export { MySpvDetails };
