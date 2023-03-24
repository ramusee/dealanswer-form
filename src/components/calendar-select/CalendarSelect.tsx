import React, { FC, forwardRef, LegacyRef, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import { CustomHeaderCalendar } from './components/CustomHeaderCalendar';
import { weekDays } from './utils';

import 'react-datepicker/dist/react-datepicker.css';
import './globalCalendar.scss';
import s from './styles.module.scss';
import { CalendarSelectProps } from './types';

const CustomButton = forwardRef(function Button(
  { value, onClick }: any,
  ref: LegacyRef<HTMLButtonElement> | undefined,
) {
  return (
    <button className={s.datepickerButton} onClick={onClick} ref={ref}>
      {value}
    </button>
  );
});

const CalendarSelect: FC<CalendarSelectProps> = ({ isDisabled = false }) => {
  const [date, setDate] = useState<Date | null>(new Date());

  // const handleCalendarClose = () => console.log('Calendar closed');
  // const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <div className={s.container}>
      <DatePicker
        selected={date}
        customInput={<CustomButton />}
        dateFormat="MMMM d, yyyy "
        onChange={date => setDate(date)}
        formatWeekDay={date => weekDays[date.getDay()]}
        disabledKeyboardNavigation
        calendarStartDay={1}
        disabled={isDisabled}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
        }) => (
          <CustomHeaderCalendar
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            decreaseYear={decreaseYear}
            increaseYear={increaseYear}
          />
        )}
      />
    </div>
  );
};

export { CalendarSelect };
