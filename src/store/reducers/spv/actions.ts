import { createAction } from '@reduxjs/toolkit/src';
import { IMySpvDetailsTabOne, IMySPVDetailsTabTwo } from '../../../types/projects/spv/mySpvDetails';
import {
  IInvestmentTermsTabOne,
  IInvestmentTermsTabThree,
  IInvestmentTermsTabTwo,
} from '../../../types/projects/spv/InvestmentTerms';
import { IAddOnsTabOne } from '../../../types/projects/spv/addOns';

const setMySpvDetailCurrentTab = createAction<number>('set my spv details current local tab');

// welcomeBlock
const setIsFirstTimeSpv = createAction<string>('set is first time spv');
const setPreviousSpvName = createAction<string>('set previous spv name');
const setIsChangeSpvInvestmentStructure = createAction<string>('set is change spv investment structure');
const setIsChangeSpvInvestmentTerms = createAction<string>('set is change spv investment terms');
const setChangeMemberRoleInformation = createAction<string[]>('set change member role information');

//mySpvDetails
const setMySpvDetailsTabOne = createAction<IMySpvDetailsTabOne>('set my spv details tab one');
const setMySpvDetailsTabTwo = createAction<IMySPVDetailsTabTwo>('set my spv details tab two');

// investmentTerms
const setInvestmentTermsCurrentTab = createAction<number>('set investment terms current tab');
const setInvestmentTermsTabOne = createAction<IInvestmentTermsTabOne>(' set investment terms tab one');
const setInvestmentTermsTabTwo = createAction<IInvestmentTermsTabTwo>('set investment terms tab two');
const setInvestmentTermsTabThree = createAction<IInvestmentTermsTabThree>('set investment terms tab three');

// investmentStructure
const addInitialMemberName = createAction<string>('add initial member name');
const removeInitialMemberName = createAction<string>('remove initial member name');
// add-ons
const setAddOnsCurrentTab = createAction<number>('set add-ons current tab');
const setAddOnsTabOne = createAction<IAddOnsTabOne>('set add-ons tab one');

export {
  setIsFirstTimeSpv,
  setPreviousSpvName,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setChangeMemberRoleInformation,
  setMySpvDetailCurrentTab,
  setMySpvDetailsTabOne,
  setMySpvDetailsTabTwo,
  setInvestmentTermsCurrentTab,
  setInvestmentTermsTabOne,
  setInvestmentTermsTabTwo,
  setInvestmentTermsTabThree,
  setAddOnsCurrentTab,
  setAddOnsTabOne,
  addInitialMemberName,
  removeInitialMemberName,
};
