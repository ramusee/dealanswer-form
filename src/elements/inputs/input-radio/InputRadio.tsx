import React, { FC, useState } from 'react';
import cn from 'classnames';

import { InputRadioProps } from './types';

import s from './styles.module.scss';
import { useFormContext } from 'react-hook-form';

const InputRadio: FC<InputRadioProps> = props => {
  const {
    title,
    name,
    isChecked,
    isDisabled = false,
    isWithText = false,
  } = props;

  const { register } = useFormContext();

  const inputRadioContainerClassName = cn(
    s.inputRadioContainer,
    isChecked && s.active,
    isDisabled && s.disabled,
  );

  // const isShowedText = isWithText && isChecked;

  // if (!isWithText) {
  // return (
  //   <label className={inputRadioContainerClassName}>
  //     <input
  //       type="radio"
  //       {...register(name, {
  //         disabled: isDisabled,
  //       })}
  //       value={title.toLowerCase()}
  //       checked={isChecked}
  //       disabled={isDisabled}
  //     />
  //     <span className={s.radioIcon} />
  //     {title}
  //   </label>
  // );
  // }

  return (
    <div className={s.container}>
      <label className={inputRadioContainerClassName}>
        <input
          type="radio"
          checked={isChecked}
          value={title.toLowerCase()}
          disabled={isDisabled}
          {...register(name, {
            disabled: isDisabled,
          })}
        />
        <span className={s.radioIcon} />
        {!isChecked && <span className={s.text}> {title}</span>}
        {isChecked && (
          <div className={s.inputTextContainer}>
            <input
              {...register(name, {
                disabled: isDisabled,
              })}
              type="text"
              autoFocus={isChecked}
              placeholder={title}
            />
          </div>
        )}
      </label>
    </div>
  );
};

export { InputRadio };
