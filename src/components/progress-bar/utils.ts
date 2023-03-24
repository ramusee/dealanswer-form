import { ProgressItem, Statuses } from '../../types/progressBar';

const spvSteps: ProgressItem[] = [
  {
    id: 1,
    title: 'My SPV Details',
    status: Statuses.Done,
  },
  {
    id: 2,
    title: 'Investment Terms',
    status: Statuses.InProgress,
  },
  {
    id: 3,
    title: 'Investment Structure',
    status: Statuses.ToDo,
  },
  {
    id: 4,
    title: 'Add-Ons',
    status: Statuses.ToDo,
  },
  {
    id: 5,
    title: 'Order Summary',
    status: Statuses.ToDo,
  },
];

export { spvSteps };
