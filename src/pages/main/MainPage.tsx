import React from 'react';
import { Button } from '../../elements/button';

import { ButtonColor, ButtonSize } from '../../types/button';
import { BUTTON_ICONS } from '../../consts/button';

import s from './styles.module.scss';
import { InputFile } from '../../elements/inputs/input-file';
import { InputFileSize, InputType } from '../../types/inputFile';
import { InputRadioGroup } from '../../components/radio-input-group';

const radioList = ['Yes', 'No', 'Other'];

const MainPage = () => {
  const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  return (
    <main className={s.main}>
      <Button
        size={ButtonSize.XL}
        color={ButtonColor.GREEN}
        title="Next, Add-Ons"
        Icon={BUTTON_ICONS.ARROW_RIGHT}
        onClick={() => console.log('button')}
      />
      <Button
        size={ButtonSize.M}
        color={ButtonColor.GREY}
        Icon={BUTTON_ICONS.TRASH}
        title="Remove"
        onClick={() => console.log('button')}
      />
      <Button
        size={ButtonSize.S}
        color={ButtonColor.WHITE}
        Icon={BUTTON_ICONS.EDIT}
        title="Edit"
        onClick={() => console.log('button')}
      />
      <Button
        size={ButtonSize.XS}
        color={ButtonColor.WHITE}
        Icon={BUTTON_ICONS.CLOSE}
        onClick={() => console.log('button')}
      />
      <InputFile
        type={InputType.SOLID}
        text="Second ID Document"
        Icon={BUTTON_ICONS.PAPERCLIP}
        size={InputFileSize.FIX}
        inputFileHandler={inputFileHandler}
      />
      <InputFile
        type={InputType.DASHED}
        text="Second ID Document"
        Icon={BUTTON_ICONS.PAPERCLIP}
        size={InputFileSize.FIX}
        inputFileHandler={inputFileHandler}
      />
      <form>
        <InputRadioGroup radioList={radioList} groupName="isMan" />
      </form>
    </main>
  );
};

export { MainPage };
