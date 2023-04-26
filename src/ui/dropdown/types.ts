interface DropdownProps {
  title: string;
  optionList: string[];
  optionClickHandler: (option: string) => void;
  newPersonClickHandler: () => void;
  isDisabled?: boolean;
}

export type { DropdownProps };
