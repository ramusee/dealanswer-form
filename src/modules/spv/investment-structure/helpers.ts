import { ICommonMember } from '../../../types/projects/spv/investmentStructure';
import { INDIVIDUAL } from './consts';

const convertMemberInfo = (data: ICommonMember) => {
  if (data.memberType.radioValue === INDIVIDUAL) {
    const convertData = {
      memberType: data.memberType,
      citizenship: data.citizenship,
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
    };
  }
};
