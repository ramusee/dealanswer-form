import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarSelect = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleCalendarClose = () => console.log('Calendar closed');
  const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <div>
      <DatePicker
        showYearPicker
        selected={date}
        onChange={date => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
    </div>
  );
};

export { CalendarSelect };
