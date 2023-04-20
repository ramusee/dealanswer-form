import { FieldsetValue, ValueOf } from '../../../types/projects/projects';
import { InputRadioContent } from '../../../types/ui/radioInputGroup';

const FieldsetAddOnsName = {
  legalDocsManageCompany: 'legalDocsManageCompany',
  legalDocsSpecMember: 'legalDocsSpecMember',
  bankCryptoAccountManageCompany: 'bankAccountManageCompany',
  bankCryptoAccountSpecMember: 'bankCryptoAccountSpecMember',
  bankCryptoAccountSpv: 'bankCryptoAccountSpv',
  brokerAccountSpv: 'brokerAccountSpv',
  exemptReportAdvisorStatus: 'exemptReportAdvisorStatus',
  adminServicesSubscribe: 'adminServicesSubscribe',
  taxFillingServicesSubscribe: 'taxFillingServicesSubscribe',
} as const;
type FieldsetAddOnsName = ValueOf<typeof FieldsetAddOnsName>;

const dualRadioList = [
  { value: 'Yes', content: InputRadioContent.Default },
  { value: 'No', content: InputRadioContent.Default },
];

const bankCheckboxList = ['Mercury', 'Flagstar Bank', 'Citizens Bank', 'Bank of America', 'TD Bank', 'Circle'];

const addOnsFieldset: Record<FieldsetAddOnsName, FieldsetValue> = {
  [FieldsetAddOnsName.legalDocsManageCompany]: {
    title: 'Add legal documents for your Management Company for $1,000',
    subTitle: 'We will draft the Initial Resolution, Operating Agreement, and Member Register.',
    radioList: dualRadioList,
  },
  [FieldsetAddOnsName.legalDocsSpecMember]: {
    title: 'Add legal documents for your Special Member for $1,000',
    subTitle: 'We will draft the Initial Resolution, Operating Agreement, and Member Register.',
    radioList: dualRadioList,
  },
  [FieldsetAddOnsName.bankCryptoAccountManageCompany]: {
    title: `Do you wish to open a bank and/or cryptocurrency account
      for your Management Company with a fee of $1,000 each?`,
    checkboxList: bankCheckboxList,
  },
  [FieldsetAddOnsName.bankCryptoAccountSpecMember]: {
    title: `Do you wish to open a bank and/or cryptocurrency account
    for your Special Member with a fee of $1,000 each?`,
    checkboxList: bankCheckboxList,
  },
  [FieldsetAddOnsName.bankCryptoAccountSpv]: {
    title: `Do you wish to open additional bank and/or
    cryptocurrency accounts for your SPV with a fee of $1,000 each?`,
    checkboxList: bankCheckboxList,
  },
  [FieldsetAddOnsName.brokerAccountSpv]: {
    title: `Do you want to open a brokerage account for your SPV for $1,000?`,
    checkboxList: ['Interactive Brokers', 'Morgan Stanley', 'Citizens Bank', 'Bank of America', 'TD Bank'],
  },
  [FieldsetAddOnsName.exemptReportAdvisorStatus]: {
    title: `Do you wish to apply for Exempt Reporting Advisor status with the SEC?`,
    subTitle: 'Deal Answer can assist you in establishing an Exempt Reporting Advisor for a fee of US$1,500.',
    radioList: dualRadioList,
  },
  [FieldsetAddOnsName.adminServicesSubscribe]: {
    title: 'Do you need administration services?',
    subscribeItemList: [
      'Unlimited Capital Calls',
      'Unlimited Distributions',
      'Investor Reporting',
      'Track investor payouts and distributions',
      'Ongoing Compliance',
      'Bank account management',
      'Corporate Resolutions',
      'Mailing address',
      'Investor portal and mobile application',
    ],
  },
  [FieldsetAddOnsName.taxFillingServicesSubscribe]: {
    title: 'Do you need tax filing and accounting services?',
    subscribeItemList: [
      'Bookkeeping',
      'Bank reconciliation',
      'Receipt management',
      'Annual budget',
      'Cash management',
      'Filing of state annual reports',
      'Sales tax filing',
      'Filing 1099s',
      'Filing of federal and state business income tax returns',
    ],
  },
};

export { addOnsFieldset, FieldsetAddOnsName };
