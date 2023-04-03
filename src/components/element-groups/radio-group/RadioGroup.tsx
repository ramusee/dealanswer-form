import React, { FC } from 'react';
import { RadioGroupProps } from './types';
import { InputRadio } from '../../../ui/inputs/input-radio';

import s from './styles.module.scss';
import { useFormContext } from 'react-hook-form';

const RadioGroup: FC<RadioGroupProps> = ({ radioList, groupName, isDisabled }) => {
  // const { formState } = useFormContext();
  // const errors = formState.errors;
  // console.log(errors);
  return (
    <div className={s.radioGroupContainer}>
      {radioList.map(({ value, content }) => (
        <InputRadio key={value} name={groupName} content={content} value={value} isDisabled={isDisabled} />
      ))}
      {/*{errors && <span>error</span>}*/}
    </div>
  );
};

export { RadioGroup };
