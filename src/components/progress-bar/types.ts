import { ValueOf } from '../../types/projects/projects';

const Statuses = {
  InProgress: 'InProgress',
  ToDo: 'ToDo',
  Done: 'Done',
} as const;
type Statuses = ValueOf<typeof Statuses>;

interface ProgressBarProps {
  contentList: ProgressItem[];
}

interface ProgressItem {
  id: number;
  title: string;
  status: Statuses;
}

export { Statuses };
export type { ProgressItem };

export type { ProgressBarProps };
