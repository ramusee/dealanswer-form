import React, { FC, forwardRef, LegacyRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { CustomHeaderCalendar } from './components/CustomHeaderCalendar';
import { weekDays } from './consts';

import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { CalendarSelectProps } from './types';

import 'react-datepicker/dist/react-datepicker.css';
import './globalCalendar.scss';
import cn from 'classnames';

import s from './styles.module.scss';
import { Controller, useFormContext } from 'react-hook-form';

const CustomButton = forwardRef(function Button(
  { value, onClick, isSelected }: any,
  ref: LegacyRef<HTMLButtonElement> | undefined,
) {
  const buttonClassName = cn(s.datepickerButton, isSelected && s.activeButton);
  return (
    <button type="button" className={buttonClassName} onClick={onClick} ref={ref}>
      <span>{value}</span>
      <CalendarIcon />
    </button>
  );
});

const CalendarSelect: FC<CalendarSelectProps> = ({ name, isChecked, isDisabled = false }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { control } = useFormContext();

  useEffect(() => {
    if (isChecked) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [isChecked]);

  // const handleCalendarClose = () => console.log('Calendar closed');
  // const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <div className={s.container}>
      <Controller
        name={`${name}.contentDateValue`}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value ? new Date(value) : new Date()}
            customInput={<CustomButton isSelected={isSelected} />}
            dateFormat="MMMM d, yyyy "
            onChange={date => onChange(date?.toISOString())}
            formatWeekDay={date => weekDays[date.getDay()]}
            disabledKeyboardNavigation
            calendarStartDay={1}
            disabled={isDisabled}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth, decreaseYear, increaseYear }) => (
              <CustomHeaderCalendar
                date={date}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                decreaseYear={decreaseYear}
                increaseYear={increaseYear}
              />
            )}
          />
        )}
      />
    </div>
  );
};

export { CalendarSelect };
