enum Statuses {
  InProgress = 'InProgress',
  ToDo = 'ToDo',
  Done = 'Done',
}

interface ProgressItem {
  id: number;
  title: string;
  status: Statuses;
}

export { Statuses };
export type { ProgressItem };
