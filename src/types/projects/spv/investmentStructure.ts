interface IInvestmentStructure {
  desiredNameSpv: string;
}

interface InitialMember {
  memberType: string;
}

interface IMemberIndividual {
  memberType: string;
  citizenship: string;
  fullLegalName: string;
  carriedInterest: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
  passportNumber: string;
  birthDate: string;
}

interface IMemberLegalEntity {
  memberType: string;
  fullLegalName: string;
  stateIncorporation: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  stateMailing: string;
  postalCode: string;
  country: string;
  signatoryName: string;
  signatoryTitle: string;
  signatoryEmail: string;
  carriedInterest: string;
}

type InitialMembers = IMemberIndividual[] | IMemberLegalEntity[];

export type { IInvestmentStructure, InitialMembers, IMemberLegalEntity, IMemberIndividual };
