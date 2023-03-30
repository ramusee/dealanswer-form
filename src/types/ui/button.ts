type ValueOf<T> = T[keyof T];

const ButtonSize = {
  XL: 'XL',
  L: 'L',
  M: 'M',
  S: 'S',
  XS: 'XS',
} as const;
type ButtonSize = ValueOf<typeof ButtonSize>;

const ButtonColor = {
  Green: 'Green',
  White: 'White',
  Grey: 'Grey',
} as const;
type ButtonColor = ValueOf<typeof ButtonColor>;

export { ButtonSize, ButtonColor };
