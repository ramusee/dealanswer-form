interface DropdownBlockProps {
  title: string;
  optionList: string[];
  percent?: string;
  createPersonClickHandler: () => void;
  addPersonHandler: (person: string) => void;
  removePersonHandler: (person: string) => void;
}

export type { DropdownBlockProps };
