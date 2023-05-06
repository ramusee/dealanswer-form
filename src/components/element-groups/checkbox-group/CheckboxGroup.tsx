import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckboxGroupProps } from './types';
import { InputCheckbox } from '../../../ui/inputs/input-checkbox';

import s from './styles.module.scss';

const CheckboxGroup: FC<CheckboxGroupProps> = ({ groupName, checkboxList }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const isError = errors[groupName];

  return (
    <div className={s.container}>
      {checkboxList.map(title => (
        <InputCheckbox key={title} name={groupName} title={title} />
      ))}
      {isError && <span className={s.errorMessage}>You must take a selection</span>}
    </div>
  );
};

export { CheckboxGroup };
