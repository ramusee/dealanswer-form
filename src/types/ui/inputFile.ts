type ValueOf<T> = T[keyof T];

const InputFileSize = {
  Cover: 'Cover',
  Fix: 'Fix',
} as const;
type InputFileSize = ValueOf<typeof InputFileSize>;

const InputType = {
  Dashed: 'Dashed',
  Solid: 'Solid',
} as const;
type InputType = ValueOf<typeof InputType>;

export { InputFileSize, InputType };
