interface CustomHeaderCalendarProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  decreaseYear: () => void;
  increaseYear: () => void;
}

interface CalendarSelectProps {
  name: string;
  isChecked: boolean;
  isDisabled?: boolean;
}

export type { CustomHeaderCalendarProps, CalendarSelectProps };
