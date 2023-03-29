import { ProgressItem, Statuses } from '../../components/progress-bar/types';

const spvSteps: ProgressItem[] = [
  {
    id: 1,
    title: 'My SPV Details',
    status: Statuses.InProgress,
  },
  {
    id: 2,
    title: 'Investment Terms',
    status: Statuses.ToDo,
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
