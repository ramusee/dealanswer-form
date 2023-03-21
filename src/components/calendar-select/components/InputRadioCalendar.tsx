import React, { FC, forwardRef } from 'react';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/calendar.svg';
import { InputRadioCalendarProps } from '../types';

import s from '../styles.module.scss';

const InputRadioCalendar: FC<InputRadioCalendarProps> = (
  { value, onClick },
  ref,
) => {
  return (
    <label className={s.inputContainer}>
      <input
        className={s.inputRadio}
        ref={ref}
        type="radio"
        value={value}
        // onChange={onChange}
      />
      <div className={s.iconContainer}>
        <CalendarIcon />
      </div>
    </label>
  );
};

export default forwardRef(InputRadioCalendar);
