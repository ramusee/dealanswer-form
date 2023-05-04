import { IRadioValueDefault } from '../../../ui/inputs/input-radio/types';

// interface IMemberIndividual {
//   memberType: string;
//   citizenship: string;
//   fullLegalName: string;
//   carriedInterest: string;
//   lineOne: string;
//   lineTwo: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
//   phoneNumber: string;
//   email: string;
//   passportNumber: string;
//   birthDate: string;
// }
//
// interface IMemberLegalEntity {
//   memberType: string;
//   fullLegalName: string;
//   stateIncorporation: string;
//   lineOne: string;
//   lineTwo: string;
//   city: string;
//   stateMailing: string;
//   postalCode: string;
//   country: string;
//   signatoryName: string;
//   signatoryTitle: string;
//   signatoryEmail: string;
//   carriedInterest: string;
// }

interface ICommonMember {
  memberType: IRadioValueDefault;
  citizenship?: string;
  fullLegalName: string;
  carriedInterest: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phoneNumber?: string;
  email?: string;
  passportNumber?: string;
  birthDate?: string;
  stateIncorporation?: string;
  stateMailing?: string;
  signatoryName?: string;
  signatoryTitle?: string;
  signatoryEmail?: string;
}

// type InitialMember = IMemberIndividual | IMemberLegalEntity;

export type { ICommonMember };
