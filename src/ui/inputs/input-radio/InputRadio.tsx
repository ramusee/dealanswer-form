import React, { FC, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputRadioProps } from './types';

import { InputRadioContent } from '../../../types/ui/radioInputGroup';
import { CalendarSelect } from '../../../components/calendar-select';

import s from './styles.module.scss';

const InputRadio: FC<InputRadioProps> = memo(props => {
  const { value, name, content, isDisabled = false } = props;

  const { register, watch } = useFormContext();

  const currentRadioValue = watch(`${name}.radioValue`);

  const isChecked = currentRadioValue === value;
  const containerClassName = cn(s.container, isChecked && s.active, isDisabled && s.disabled);

  const renderContent = () => {
    switch (content) {
      case InputRadioContent.Default:
        return (
          <div className={s.content}>
            <span>{value}</span>
          </div>
        );
      case InputRadioContent.InputText:
        return (
          <div className={s.content}>
            {!isChecked && <span className={s.withText}>{value}</span>}
            {isChecked && (
              <div className={s.inputTextContainer}>
                <input
                  {...register(`${name}.contentValue`, {
                    required: true,
                  })}
                  type="text"
                  autoFocus={isChecked}
                  placeholder="Other"
                />
              </div>
            )}
          </div>
        );
      case InputRadioContent.Calendar:
        return (
          <div className={s.content}>
            <CalendarSelect name={name} isChecked={isChecked} />
          </div>
        );
      default:
        return <span className={s.content}>{value}</span>;
    }
  };

  return (
    <label className={containerClassName}>
      <div className={s.inputRadioContainer}>
        <input
          className={s.inputRadio}
          type="radio"
          {...register(`${name}.radioValue`, {
            disabled: isDisabled,
            required: true,
          })}
          value={value}
          disabled={isDisabled}
        />
        <span className={s.radioIcon} />
      </div>
      {renderContent()}
    </label>
  );
});

export { InputRadio };
