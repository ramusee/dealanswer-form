import React, { FC, forwardRef, LegacyRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { CustomHeaderCalendar } from './components/CustomHeaderCalendar';
import { weekDays } from './utils';

import 'react-datepicker/dist/react-datepicker.css';
import './globalCalendar.scss';
import { CalendarSelectProps } from './types';
import cn from 'classnames';

import s from './styles.module.scss';
import { Controller, useController, useFormContext } from 'react-hook-form';

const CustomButton = forwardRef(function Button(
  { value, onClick, isSelected }: any,
  ref: LegacyRef<HTMLButtonElement> | undefined,
) {
  const buttonClassName = cn(s.datepickerButton, isSelected && s.activeButton);
  return (
    <button type="button" className={buttonClassName} onClick={onClick} ref={ref}>
      {value}
    </button>
  );
});

const CalendarSelect: FC<CalendarSelectProps> = ({ name, isChecked, isDisabled = false }) => {
  // const [date, setDate] = useState<Date | null>(new Date());
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      required: true,
    },
  });
  useEffect(() => {
    if (isChecked) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [isChecked]);

  // const handleCalendarClose = () => console.log('Calendar closed');
  // const handleCalendarOpen = () => console.log('Calendar opened');
  // Todo использовать Controller
  // Todo исправить очищение contentValue при изменение radioValue

  return (
    <div className={s.container}>
      <Controller
        name={`${name},contentDateValue`}
        control={control}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            customInput={<CustomButton isSelected={isSelected} />}
            dateFormat="MMMM d, yyyy "
            onChange={date => field.onChange(date)}
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
