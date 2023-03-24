interface CustomHeaderCalendarProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  decreaseYear: () => void;
  increaseYear: () => void;
}

interface CalendarSelectProps {
  isDisabled?: boolean;
}

export type { CustomHeaderCalendarProps, CalendarSelectProps };
