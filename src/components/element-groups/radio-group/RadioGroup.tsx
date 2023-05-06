import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { RadioGroupProps } from './types';
import { InputRadio } from '../../../ui/inputs/input-radio';

import s from './styles.module.scss';

const RadioGroup: FC<RadioGroupProps> = ({ radioList, groupName, isDisabled }) => {
  const {
    formState: { errors },
  } = useFormContext();
  const isError = errors[groupName];

  return (
    <div className={s.radioGroupContainer}>
      {radioList.map(({ value, content }) => (
        <InputRadio key={value} name={groupName} content={content} value={value} isDisabled={isDisabled} />
      ))}
      {isError && <span className={s.errorMessage}>You must take a selection</span>}
    </div>
  );
};

export { RadioGroup };
