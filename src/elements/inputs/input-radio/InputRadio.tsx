import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputRadioProps } from './types';

import s from './styles.module.scss';

const InputRadio: FC<InputRadioProps> = props => {
  const { title, name, isDisabled = false, isWithText = false } = props;

  const { register, watch } = useFormContext();
  // const textValue = watch('radioTextValue');
  const radioValue = watch(name);

  const isChecked = radioValue === title;

  const inputRadioContainerClassName = cn(
    s.inputRadioContainer,
    isChecked && s.active,
    isDisabled && s.disabled,
  );

  if (!isWithText) {
    return (
      <label className={inputRadioContainerClassName}>
        <input
          type="radio"
          {...register(name, {
            disabled: isDisabled,
          })}
          value={title}
          checked={isChecked}
          disabled={isDisabled}
        />
        <span className={s.radioIcon} />
        <div className={s.content}>{title}</div>
      </label>
    );
  }

  return (
    <div className={s.container}>
      <label className={inputRadioContainerClassName}>
        <input
          type="radio"
          checked={isChecked}
          value={title}
          disabled={isDisabled}
          {...register(name, {
            disabled: isDisabled,
          })}
        />
        <span className={s.radioIcon} />
        <div className={s.content}>
          {!isChecked && <span className={s.withText}>{title}</span>}
          {isChecked && (
            <div className={s.inputTextContainer}>
              <input
                {...register('radioTextValue', {
                  disabled: isDisabled,
                })}
                type="text"
                autoFocus={isChecked}
                placeholder={title}
              />
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export { InputRadio };
