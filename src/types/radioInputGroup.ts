interface InputRadioItem {
  value: string;
  content: InputRadioContent;
}

enum InputRadioContent {
  Default = 'Default',
  InputText = 'InputText',
  Calendar = 'Calendar',
}

export type { InputRadioItem };
export { InputRadioContent };
