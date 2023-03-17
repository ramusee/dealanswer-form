import React, { ChangeEvent, FC, useState } from 'react';
import { InputRadioGroupProps } from './types';
import { InputRadio } from '../../elements/inputs/input-radio';

import s from './styles.module.scss';

const InputRadioGroup: FC<InputRadioGroupProps> = ({
  radioList,
  groupName,
  isDisabled,
}) => {
  const [value, setValue] = useState<string>();

  const inputRadioHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={s.radioGroupContainer}>
      {radioList.map(text => (
        <InputRadio
          key={text}
          name={groupName}
          text={text}
          onChange={inputRadioHandler}
          isChecked={value === text.toLowerCase()}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};

export { InputRadioGroup };
