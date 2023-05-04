import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
import { IMySpvDetails } from '../../../types/projects/spv/mySpvDetails';
import {
  setAddOnsCurrentTab,
  setAddOnsTabOne,
  setChangeMemberRoleInformation,
  addInitialMemberName,
  setInvestmentTermsCurrentTab,
  setInvestmentTermsTabOne,
  setInvestmentTermsTabThree,
  setInvestmentTermsTabTwo,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setMySpvDetailCurrentTab,
  setMySpvDetailsTabOne,
  setMySpvDetailsTabTwo,
  setPreviousSpvName,
  removeInitialMemberName,
  addCommonMember,
} from './actions';
import { addOnsState, investmentTermsState, mySpvDetailsState, welcomeBlockState } from './consts';

import { IInvestmentTerms } from '../../../types/projects/spv/InvestmentTerms';
import { IAddOns } from '../../../types/projects/spv/addOns';
import { ICommonMember } from '../../../types/projects/spv/investmentStructure';

interface SpvState {
  members: ICommonMember[];
  welcomeBlock: ISpvWelcomeBlock;
  mySpvDetails: IMySpvDetails;
  investmentTerms: IInvestmentTerms;
  investmentStructure: {
    initialMemberNames: string[];
  };
  addOns: IAddOns;
}

const initialSpvState: SpvState = {
  members: [
    {
      memberType: { radioValue: 'Individual' },
      citizenship: 'USA',
      fullLegalName: 'Justin Timberlake',
      carriedInterest: '30%',
      lineOne: 'example1',
      lineTwo: 'example2',
      city: 'New York',
      state: 'USA',
      postalCode: '421234',
      country: 'USA',
      phoneNumber: '42898329835',
      email: 'ram.u@live.com',
      passportNumber: '34243 234234',
      birthDate: '15.02.1992',
    },
    {
      memberType: { radioValue: 'Individual' },
      citizenship: 'USA',
      fullLegalName: 'Mark Wahlberg',
      carriedInterest: '60%',
      lineOne: 'example1',
      lineTwo: 'example2',
      city: 'New York',
      state: 'USA',
      postalCode: '421234',
      country: 'USA',
      phoneNumber: '42898329835',
      email: 'ram.u@live.com',
      passportNumber: '34243 234234',
      birthDate: '11.05.1982',
    },
  ],
  welcomeBlock: welcomeBlockState,
  mySpvDetails: mySpvDetailsState,
  investmentTerms: investmentTermsState,
  investmentStructure: {
    initialMemberNames: [],
  },
  addOns: addOnsState,
  // orderSummary: {},
};

export const spv = createReducer(initialSpvState, {
  // welcomeBlock
  [setIsFirstTimeSpv.type]: (state, action) => {
    state.welcomeBlock.isFirstTimeSpv = action.payload;
    state.welcomeBlock.previousSpvName = '';
  },
  [setPreviousSpvName.type]: (state, action) => {
    state.welcomeBlock.previousSpvName = action.payload;
  },
  [setIsChangeSpvInvestmentStructure.type]: (state, action) => {
    state.welcomeBlock.isChangeSpvInvestmentStructure = action.payload;
    state.welcomeBlock.changeMemberRoleInformation = null;
  },
  [setIsChangeSpvInvestmentTerms.type]: (state, action) => {
    state.welcomeBlock.isChangeSpvInvestmentTerms = action.payload;
  },
  [setChangeMemberRoleInformation.type]: (state, action) => {
    state.welcomeBlock.changeMemberRoleInformation = action.payload;
  },
  // mySpvDetails
  [setMySpvDetailCurrentTab.type]: (state, action) => {
    state.mySpvDetails.currentTab = action.payload;
  },
  [setMySpvDetailsTabOne.type]: (state, action) => {
    state.mySpvDetails.tabOne = action.payload;
  },
  [setMySpvDetailsTabTwo.type]: (state, action) => {
    state.mySpvDetails.tabTwo = action.payload;
  },
  // investment terms
  [setInvestmentTermsCurrentTab.type]: (state, action) => {
    state.investmentTerms.currentTab = action.payload;
  },
  [setInvestmentTermsTabOne.type]: (state, action) => {
    state.investmentTerms.tabOne = action.payload;
  },
  [setInvestmentTermsTabTwo.type]: (state, action) => {
    state.investmentTerms.tabTwo = action.payload;
  },
  [setInvestmentTermsTabThree.type]: (state, action) => {
    state.investmentTerms.tabThree = action.payload;
  },
  // investmentStructure
  [addCommonMember.type]: (state, action) => {
    state.members.push(action.payload);
  },
  [addInitialMemberName.type]: (state, action) => {
    state.investmentStructure.initialMemberNames.push(action.payload);
  },
  [removeInitialMemberName.type]: (state, action) => {
    state.investmentStructure.initialMemberNames = state.investmentStructure.initialMemberNames.filter(
      item => item !== action.payload,
    );
  },
  // add-ons
  [setAddOnsCurrentTab.type]: (state, action) => {
    state.addOns.currentTab = action.payload;
  },
  [setAddOnsTabOne.type]: (state, action) => {
    state.addOns.tabOne = action.payload;
  },
});
