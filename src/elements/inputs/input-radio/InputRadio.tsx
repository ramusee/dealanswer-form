import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputRadioProps } from './types';

import { InputRadioContent } from '../../../types/radioInputGroup';
import { CalendarSelect } from '../../../components/calendar-select';
import s from './styles.module.scss';

const InputRadio: FC<InputRadioProps> = props => {
  const { title, name, content, isDisabled = false } = props;
  const [inputTextValue, setInputTextValue] = useState<string>('');

  const { register, watch } = useFormContext();
  // const textValue = watch('radioTextValue');
  const radioValue = watch(name);

  const isChecked = radioValue === title;

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
            <span>{title}</span>
          </div>
        );
      case InputRadioContent.InputText:
        return (
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
        );
      case InputRadioContent.Calendar:
        return (
          <div className={s.content}>
            <CalendarSelect />
          </div>
        );
      default:
        return <span className={s.content}>{title}</span>;
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
          value={title}
          disabled={isDisabled}
        />
        <span className={s.radioIcon} />
      </div>
      {renderContent()}
    </label>
  );
};

export { InputRadio };
