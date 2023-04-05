type ValueOf<T> = T[keyof T];

const RouteNames = {
  root: '/',
  exampleUiForm: 'exampleUiKit',
  spv: 'spv',
} as const;

type RouteNames = ValueOf<typeof RouteNames>;

export { RouteNames };
