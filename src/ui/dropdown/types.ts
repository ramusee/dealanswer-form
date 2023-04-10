interface DropdownProps {
  title: string;
  optionList: string[];
  optionClickHandler: (option: string) => void;
  newEntityClickHandler: () => void;
  isDisabled?: boolean;
}

export type { DropdownProps };
