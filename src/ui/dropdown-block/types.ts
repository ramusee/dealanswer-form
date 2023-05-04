interface DropdownBlockProps {
  title: string;
  optionList: string[];
  percent?: string;
  targetMembers: string[];
  createPersonClickHandler: () => void;
  addPersonHandler: (person: string) => void;
  editPersonHandler: () => void;
  removePersonHandler: (person: string) => void;
}

export type { DropdownBlockProps };
