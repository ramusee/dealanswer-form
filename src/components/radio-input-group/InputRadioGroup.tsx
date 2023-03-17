import React, { ChangeEvent, FC, useState } from 'react';
import { InputRadioGroupProps } from './types';
import { InputRadio } from '../../elements/inputs/input-radio';

import s from './styles.module.scss';
import { useFormContext } from 'react-hook-form';

const InputRadioGroup: FC<InputRadioGroupProps> = ({
  radioList,
  groupName,
  isDisabled,
}) => {
  const { watch } = useFormContext();
  const inputValue = watch(groupName);

  return (
    <div className={s.radioGroupContainer}>
      {radioList.map(({ title, withText }) => (
        <InputRadio
          key={title}
          name={groupName}
          title={title}
          isDisabled={isDisabled}
          isWithText={withText}
          isChecked={inputValue === title.toLowerCase()}
        />
      ))}
    </div>
  );
};

export { InputRadioGroup };
