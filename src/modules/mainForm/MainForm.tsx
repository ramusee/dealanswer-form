import React from 'react';
import { Button } from '../../elements/button';
import { ButtonColor, ButtonSize } from '../../types/button';
import { ICONS } from '../../consts/icons';
import { InputFile } from '../../elements/inputs/input-file';
import { InputFileSize, InputType } from '../../types/inputFile';
import { RadioGroup } from '../../components/element-groups/radio-group';
import { InputRadioContent, InputRadioItem } from '../../types/radioInputGroup';
import { FormProvider, useForm } from 'react-hook-form';
import { InputText } from '../../elements/inputs/input-text';
import { InputPassword } from '../../elements/inputs/input-password';
import { InputPercent } from '../../elements/inputs/input-percent';
import s from './styles.module.scss';
import { CheckboxGroup } from '../../components/element-groups/checkbox-group';
import { Dropdown } from '../../components/dropdown';
import { Accordion } from '../../components/accordion';
import { format } from 'date-fns';
import { FilesUploadingGroup } from '../../components/element-groups/files-uploading-group';
import { filesUploadingExample } from '../../configs/FilesUploading';
import { Subscribe } from '../subscribe/Subscribe';
import { subscribeAdministrationServices } from '../../consts/subscribe';

const inputRadioList: InputRadioItem[] = [
  { value: 'Yes', content: InputRadioContent.Default },
  { value: 'No', content: InputRadioContent.Default },
  {
    value: 'Other',
    content: InputRadioContent.InputText,
  },
  {
    value: format(new Date(), 'MMMM d, yyyy'),
    content: InputRadioContent.Calendar,
  },
];

const dropDownOptionsList: string[] = [
  'Justin Randall Timberlake',
  'William Bradley Pitt',
  'Leonardo Wilhelm DiCaprio',
  'Benedict Timothy Cumberbatch',
  'Michael Calyle Hall',
  'Leonardo Wilhelm Diaprio',
  'Benedict Timohy Cumberbatch',
  'Michael Carlyle Hll',
];

const checkboxList = ['Mercury', 'Earth', 'Mars', 'Neptune'];
const accordionList = ['List Name 1', 'List Name 2', 'List Name 3'];

const MainForm = () => {
  const methods = useForm();

  const inputFileHandler = (file: File) => {
    console.log(file);
  };

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className={s.mainForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <Button
          size={ButtonSize.XL}
          color={ButtonColor.Green}
          Icon={ICONS.ArrowRight}
          onClick={() => console.log('button')}
        >
          Next, Add-Ons
        </Button>
        <Button
          size={ButtonSize.M}
          color={ButtonColor.Grey}
          Icon={ICONS.Trash}
          onClick={() => console.log('button')}
        >
          Remove
        </Button>
        <Button
          size={ButtonSize.S}
          color={ButtonColor.White}
          Icon={ICONS.Edit}
          onClick={() => console.log('hey')}
        >
          Edit
        </Button>
        <Button
          size={ButtonSize.XS}
          color={ButtonColor.White}
          Icon={ICONS.Close}
          onClick={() => console.log('button')}
        />
        <InputFile
          type={InputType.Solid}
          title="Second ID Document"
          Icon={ICONS.Paperclip}
          size={InputFileSize.Fix}
          onUpload={inputFileHandler}
        />
        <InputFile
          type={InputType.Dashed}
          title="Second ID Document"
          Icon={ICONS.Paperclip}
          size={InputFileSize.Fix}
          onUpload={inputFileHandler}
        />
        {filesUploadingExample.map(({ name, withCitizenship }) => (
          <FilesUploadingGroup
            key={name}
            title={name}
            withCitizenship={withCitizenship}
          />
        ))}
        <RadioGroup radioList={inputRadioList} groupName="isMan" />
        <InputText name="Full Legal Name" />
        <InputPassword />
        <InputPercent
          name="% in the Carried Interest"
          onClick={() => console.log('button')}
        />
        <Dropdown name="Add Manager" optionsList={dropDownOptionsList} />
        <CheckboxGroup checkboxList={checkboxList} groupName="planet" />
        <Accordion price={5000} title="SPV" contentList={accordionList} />
        <Subscribe
          title="Do you need administration services?"
          contentList={subscribeAdministrationServices}
        />
      </form>
    </FormProvider>
  );
};
export { MainForm };
