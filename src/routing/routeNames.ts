import { ValueOf } from '../types/projects/projects';

const RouteNames = {
  root: '/',
  exampleUiForm: 'exampleUiKit',
  spv: 'spv',
} as const;

type RouteNames = ValueOf<typeof RouteNames>;

export { RouteNames };
