import React, { FC } from 'react';

import { ReactComponent as ArrowCalendarIcon } from '../../../assets/icons/arrowCalendar.svg';
import { CustomHeaderCalendarProps } from '../types';
import { months } from '../consts';

import s from '../styles.module.scss';

const CustomHeaderCalendar: FC<CustomHeaderCalendarProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  increaseYear,
  decreaseYear,
}) => {
  const monthName = months[date.getMonth()];

  return (
    <div className={s.headerCalendarContainer}>
      <div>
        <button type="button" className={s.buttonCount} onClick={decreaseYear}>
          <ArrowCalendarIcon />
        </button>
        <span>{date.getFullYear()}</span>
        <button type="button" className={s.buttonCount} onClick={increaseYear}>
          <ArrowCalendarIcon className={s.increaseIcon} />
        </button>
      </div>
      <div>
        <button type="button" className={s.buttonCount} onClick={decreaseMonth}>
          <ArrowCalendarIcon />
        </button>
        <span>{monthName}</span>
        <button type="button" className={s.buttonCount} onClick={increaseMonth}>
          <ArrowCalendarIcon className={s.increaseIcon} />
        </button>
      </div>
    </div>
  );
};

export { CustomHeaderCalendar };
