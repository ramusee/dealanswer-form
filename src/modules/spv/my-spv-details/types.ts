interface MySpvDetailsProps {
  previousTabHandler: () => void;
  nextTabHandler: () => void;
}

interface MySpvDetailTabProps {
  nextTabHandler?: () => void;
  previousTabHandler?: () => void;
  changeCurrentLocalTab: (step: number) => void;
}
export type { MySpvDetailsProps, MySpvDetailTabProps };
