import React, { forwardRef, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import InputRadioCalendar from './components/InputRadioCalendar';

import s from './styles.module.scss';

const CalendarSelect = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const inputRef = useRef(null);
  // const handleCalendarClose = () => console.log('Calendar closed');
  // const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <div>
      <DatePicker
        selected={date}
        // customInput={<CustomInput inputRef={inputRef} />}
        dateFormat="MMMM d, yyyy "
        onChange={date => setDate(date)}
      />
    </div>
  );
};

export { CalendarSelect };
