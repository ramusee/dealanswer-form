import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAddOnsCurrentTab, setAddOnsCurrentTab } from '../../../store/reducers/spv';
import { AddOnsTabOne } from './components/AddOnsTabOne';

const AddOns: FC = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector(selectAddOnsCurrentTab);

  const changeCurrentLocalTab = (tab: number) => {
    dispatch(setAddOnsCurrentTab(tab));
  };

  return <>{currentTab === 1 && <AddOnsTabOne changeCurrentTab={changeCurrentLocalTab} />}</>;
};

export { AddOns };
