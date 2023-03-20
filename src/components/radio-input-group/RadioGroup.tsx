import React, { FC } from 'react';
import { RadioGroupProps } from './types';
import { InputRadio } from '../../elements/inputs/input-radio';

import s from './styles.module.scss';

const RadioGroup: FC<RadioGroupProps> = ({
  radioList,
  groupName,
  isDisabled,
}) => {
  return (
    <div className={s.radioGroupContainer}>
      {radioList.map(({ title, withText }) => (
        <InputRadio
          key={title}
          name={groupName}
          title={title}
          isDisabled={isDisabled}
          isWithText={withText}
        />
      ))}
    </div>
  );
};

export { RadioGroup };
