import { ValueOf } from '../projects/projects';

const InputFileSize = {
  Default: 'Default',
  Cover: 'Cover',
  Fix: 'Fix',
} as const;
type InputFileSize = ValueOf<typeof InputFileSize>;

const InputFileType = {
  Dashed: 'Dashed',
  Solid: 'Solid',
} as const;
type InputFileType = ValueOf<typeof InputFileType>;

export { InputFileSize, InputFileType };
