import { FieldsetValue, ValueOf } from '../../../types/projects/projects';
import { InputRadioContent } from '../../../types/ui/radioInputGroup';

const sectionTitleInvestmentTerms = 'Investment Terms';

const FieldsetInvestTermsName = {
  carriedInterestFor: 'carriedInterestFor',
  carriedInterest: 'carriedInterest',
  preferredReturn: 'preferredReturn',
  managementFee: 'managementFee',
  typeManagementFee: 'typeManagementFee',
  subscriptionFee: 'subscriptionFee',
  isSubscriptionFeeCapital: 'isSubscriptionFeeCapital',
  isUsdcFromInvestors: 'isUsdcFromInvestors',
  isMultiAssetSpv: 'isMultiAssetSpv',
  portfolioInformation: 'portfolioInformation',
  portfolioPresentation: 'portfolioPresentation',
  isDistributePortfolio: 'isDistributePortfolio',
} as const;
type FieldsetInvestTermsName = ValueOf<typeof FieldsetInvestTermsName>;

const differentPercent = 'Different % for each investor';

const investTermsFieldset: Record<FieldsetInvestTermsName, FieldsetValue> = {
  [FieldsetInvestTermsName.carriedInterestFor]: {
    title: 'Who will receive Carried Interest?',
    subTitle: 'Manager or third-party (Special Member) may receive the carried interest',
    checkboxList: ['Manager(s)', 'Special Member(s)'],
  },
  [FieldsetInvestTermsName.carriedInterest]: {
    title: 'Carried Interest',
    subTitle: 'Please select % of the carried interest',
    radioList: [
      { value: '15%', content: InputRadioContent.Default },
      { value: '20%', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
      { value: differentPercent, content: InputRadioContent.Default },
      { value: 'None', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.preferredReturn]: {
    title: 'Preferred Return',
    subTitle: 'Please select % of the Preferred Return',
    radioList: [
      { value: '3%', content: InputRadioContent.Default },
      { value: '5%', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
      { value: differentPercent, content: InputRadioContent.Default },
      { value: 'None', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.managementFee]: {
    title: 'Management Fee',
    subTitle: 'Please select % of the Management Fee',
    radioList: [
      { value: '1.5%', content: InputRadioContent.Default },
      { value: '2%', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
      { value: differentPercent, content: InputRadioContent.Default },
      { value: 'None', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.typeManagementFee]: {
    title: 'How will the Management Fee be paid?',
    radioList: [
      { value: 'Monthly', content: InputRadioContent.Default },
      { value: 'Quarterly', content: InputRadioContent.Default },
      { value: 'Semiannually', content: InputRadioContent.Default },
      { value: 'Annually', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.subscriptionFee]: {
    title: 'Subscription Fee',
    subTitle: 'Please select % of the Subscription Fee',
    radioList: [
      { value: '3%', content: InputRadioContent.Default },
      { value: '5%', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
      { value: differentPercent, content: InputRadioContent.Default },
      { value: 'None', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.isSubscriptionFeeCapital]: {
    title: "Will the subscription fee be charged in addition to an investor's capital contribution?",
    radioList: [
      { value: 'Yes', content: InputRadioContent.Default },
      { value: 'No', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.isUsdcFromInvestors]: {
    title: 'Do you accept USDC from investors?',
    radioList: [
      { value: 'Cash', content: InputRadioContent.Default },
      { value: 'Cash and USDC', content: InputRadioContent.Default },
    ],
  },
  [FieldsetInvestTermsName.isMultiAssetSpv]: {
    title: 'Do you want to form multi-asset SPV?',
    radioList: [
      { value: 'Yes', content: InputRadioContent.Default },
      { value: 'No', content: InputRadioContent.Default },
    ],
    inputText: { value: 'isMultiAssetSpvTextValue', placeholder: "Please describe an SPV's investment strategy" },
  },
  [FieldsetInvestTermsName.portfolioInformation]: {
    title: 'Please provide information about your planned portfolio investment',
    inputTextList: [
      { value: 'portfolioInformation.fullLegalName', placeholder: 'Full Legal Name' },
      { value: 'portfolioInformation.state', placeholder: 'State/Country of Incorporation' },
      {
        value: 'portfolioInformation.briefDescription',
        placeholder: 'Brief description (optional)',
        isRequired: false,
      },
    ],
  },
  [FieldsetInvestTermsName.portfolioPresentation]: {
    title: 'You can download your Portfolio Investment Presentation',
    inputFile: {
      title: 'Download Portfolio Investment Presentation',
      value: FieldsetInvestTermsName.portfolioPresentation,
    },
  },
  [FieldsetInvestTermsName.isDistributePortfolio]: {
    title: `Would you like Deal Answer to distribute the Portfolio Investment Presentation
      among members of the Deal Answer Investment Community and invite them to invest in your SPV?`,
    radioList: [
      { value: 'Yes', content: InputRadioContent.Default },
      { value: 'No', content: InputRadioContent.Default },
    ],
  },
};
export { sectionTitleInvestmentTerms, investTermsFieldset, FieldsetInvestTermsName };
