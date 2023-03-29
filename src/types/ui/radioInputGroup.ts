type ValueOf<T> = T[keyof T];

interface InputRadioItem {
  value: string;
  content: InputRadioContent;
}

const InputRadioContent = {
  Default: 'Default',
  InputText: 'InputText',
  Calendar: 'Calendar',
} as const;

type InputRadioContent = ValueOf<typeof InputRadioContent>;

export type { InputRadioItem };
export { InputRadioContent };
