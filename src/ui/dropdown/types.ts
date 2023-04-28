interface DropdownProps {
  title: string;
  optionList: string[];
  optionClickHandler: (option: string) => void;
  createPersonClickHandler: () => void;
  isDisabled?: boolean;
}

export type { DropdownProps };
