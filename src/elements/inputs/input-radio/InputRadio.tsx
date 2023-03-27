import React, { FC, memo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputRadioProps } from './types';

import { InputRadioContent } from '../../../types/radioInputGroup';
import { CalendarSelect } from '../../../components/calendar-select';

import s from './styles.module.scss';

const InputRadio: FC<InputRadioProps> = memo(props => {
  const { value, name, content, isDisabled = false } = props;
  const [inputTextValue, setInputTextValue] = useState<string>('');

  const { register, watch, setValue } = useFormContext();
  const currentRadioValue = watch(name);

  const isChecked = currentRadioValue === value;

  const containerClassName = cn(
    s.container,
    isChecked && s.active,
    isDisabled && s.disabled,
  );

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
                  onChange={e => setInputTextValue(e.target.value)}
                  value={inputTextValue}
                  type="text"
                  autoFocus={isChecked}
                  placeholder={value}
                />
              </div>
            )}
          </div>
        );
      case InputRadioContent.Calendar:
        return (
          <div className={s.content}>
            <CalendarSelect isChecked={isChecked} />
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
          {...register(name, {
            disabled: isDisabled,
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
