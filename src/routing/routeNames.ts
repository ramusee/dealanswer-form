type ValueOf<T> = T[keyof T];

const RouteNames = {
  root: '/',
  exampleUiForm: 'exampleUiKit',
  mySpvDetails: 'mySpvDetails',
} as const;

type RouteNames = ValueOf<typeof RouteNames>;

export { RouteNames };
