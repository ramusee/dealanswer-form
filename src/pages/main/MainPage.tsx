import React from 'react';
import { Button } from '../../elements/button';

import { ButtonColor, ButtonSize } from '../../types/button';
import { BUTTON_ICONS } from '../../consts/button';

import s from './styles.module.scss';
import { InputFile } from '../../elements/inputs/input-file';
import { InputFileSize, InputType } from '../../types/inputFile';
import { InputRadioGroup } from '../../components/radio-input-group';
import { Header } from '../../modules/header';

const radioList = ['Yes', 'No', 'Other'];

const MainPage = () => {
  const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  return (
    <>
      <Header />
      <main className={s.main}>
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
        <form>
          <InputRadioGroup radioList={radioList} groupName="isMan" />
        </form>
      </main>
    </>
  );
};

export { MainPage };
