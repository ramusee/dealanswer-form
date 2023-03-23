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
      {radioList.map(({ title, content }) => (
        <InputRadio
          key={title}
          name={groupName}
          content={content}
          title={title}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};

export { RadioGroup };
