import React from 'react';
import { Button } from '../../elements/button';
import { ButtonColor, ButtonSize } from '../../types/button';
import { BUTTON_ICONS } from '../../consts/button';
import { InputFile } from '../../elements/inputs/input-file';
import { InputFileSize, InputType } from '../../types/inputFile';
import { InputRadioGroup } from '../../components/radio-input-group';
import { CalendarSelect } from '../../components/calendar-select';
import { InputRadio } from '../../types/radioInputGroup';
import { FormProvider, useForm } from 'react-hook-form';
import s from './styles.module.scss';

const inputRadioList: InputRadio[] = [
  { title: 'Yes' },
  { title: 'No' },
  { title: 'Other', withText: true },
];

const MainForm = () => {
  const methods = useForm();

  const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  const onSubmit = () => console.log();

  return (
    <FormProvider {...methods}>
      <form className={s.mainForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <Button
          size={ButtonSize.XL}
          color={ButtonColor.Green}
          title="Next, Add-Ons"
          Icon={BUTTON_ICONS.ArrowRight}
          onClick={() => console.log('button')}
        />
        <Button
          size={ButtonSize.M}
          color={ButtonColor.Grey}
          Icon={BUTTON_ICONS.Trash}
          title="Remove"
          onClick={() => console.log('button')}
        />
        <Button
          size={ButtonSize.S}
          color={ButtonColor.White}
          Icon={BUTTON_ICONS.Edit}
          title="Edit"
          onClick={() => console.log('button')}
        />
        <Button
          size={ButtonSize.XS}
          color={ButtonColor.White}
          Icon={BUTTON_ICONS.Close}
          onClick={() => console.log('button')}
        />
        <InputFile
          type={InputType.Solid}
          text="Second ID Document"
          Icon={BUTTON_ICONS.Paperclip}
          size={InputFileSize.Fix}
          inputFileHandler={inputFileHandler}
        />
        <InputFile
          type={InputType.Dashed}
          text="Second ID Document"
          Icon={BUTTON_ICONS.Paperclip}
          size={InputFileSize.Fix}
          inputFileHandler={inputFileHandler}
        />
        <InputRadioGroup radioList={inputRadioList} groupName="isMan" />
        <CalendarSelect />
      </form>
    </FormProvider>
  );
};
export { MainForm };
