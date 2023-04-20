import { IRadioValueDefault } from '../../../ui/inputs/input-radio/types';

interface IAddOns {
  currentTab: number;
  tabOne: IAddOnsTabOne;
}

interface IAddOnsTabOne {
  legalDocsManageCompany: IRadioValueDefault;
  legalDocsSpecMember: IRadioValueDefault;
  bankCryptoAccountManageCompany: string[] | null;
  bankCryptoAccountSpecMember: string[] | null;
  bankCryptoAccountSpv: string[] | null;
  brokerAccountSpv: string[] | null;
  exemptReportAdvisorStatus: IRadioValueDefault;
  adminServicesSubscribe: boolean;
  taxFillingServicesSubscribe: boolean;
}

export type { IAddOns, IAddOnsTabOne };
