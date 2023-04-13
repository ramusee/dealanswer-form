import React, { useState } from 'react';
import { IndividualMemberForm } from '../../../forms/individual-member-form';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { investStructureFieldset } from '../consts';

import s from '../styles.module.scss';

const InitialMembers = () => {
  return (
    <div className={s.investmentStructureForm}>
      <RadioGroup radioList={investStructureFieldset.memberType.radioList || []} groupName="memberType" />
      <IndividualMemberForm />
    </div>
  );
};

export { InitialMembers };
