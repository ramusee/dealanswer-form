interface CustomHeaderCalendarProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  decreaseYear: () => void;
  increaseYear: () => void;
}

interface CalendarSelectProps {
  isChecked: boolean;
  isDisabled?: boolean;
}

export type { CustomHeaderCalendarProps, CalendarSelectProps };
