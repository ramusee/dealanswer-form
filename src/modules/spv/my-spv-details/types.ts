interface MySpvDetailsProps {
  previousTabHandler: () => void;
  nextTabHandler: () => void;
}

interface MySpvDetailTabProps {
  nextTabHandler?: () => void;
  previousTabHandler?: () => void;
  changeCurrentLocalTab: (step: string) => void;
}
export type { MySpvDetailsProps, MySpvDetailTabProps };
