import React, { FC } from 'react';
import { RadioGroupProps } from './types';
import { InputRadio } from '../../../ui/inputs/input-radio';

import s from './styles.module.scss';

const RadioGroup: FC<RadioGroupProps> = ({ radioList, groupName, isDisabled }) => {
  return (
    <div className={s.radioGroupContainer}>
      {radioList.map(({ value, content }) => (
        <InputRadio key={value} name={groupName} content={content} value={value} isDisabled={isDisabled} />
      ))}
    </div>
  );
};

export { RadioGroup };
