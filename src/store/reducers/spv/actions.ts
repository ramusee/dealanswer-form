import { createAction } from '@reduxjs/toolkit/src';
import { IMySpvDetailsTabOne, IMySPVDetailsTabTwo } from '../../../types/projects/spv/mySpvDetails';

const setMySpvDetailCurrentLocalTab = createAction<number>('set my spv details current local tab');

// welcomeBlock
const setIsFirstTimeSpv = createAction<string>('set is first time spv');
const setPreviousSpvName = createAction<string>('set previous spv name');
const setIsChangeSpvInvestmentStructure = createAction<string>('set is change spv investment structure');
const setIsChangeSpvInvestmentTerms = createAction<string>('set is change spv investment terms');
const setChangeMemberRoleInformation = createAction<string[]>('set change member role information');

//mySpvDetailsTabOne
const setMySpvDetailsTabOne = createAction<IMySpvDetailsTabOne>('set my spv details tab one');

// mySpvDetailsTabTwo
const setMySpvDetailsTabTwo = createAction<IMySPVDetailsTabTwo>('set my spv details tab two');

export {
  setMySpvDetailCurrentLocalTab,
  setIsFirstTimeSpv,
  setPreviousSpvName,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setChangeMemberRoleInformation,
  setMySpvDetailsTabOne,
  setMySpvDetailsTabTwo,
};
