import React from 'react';
import { Button } from '../../ui/button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';
import { InputFile } from '../../ui/inputs/input-file';
import { InputFileSize, InputFileType } from '../../types/ui/inputFile';
import { RadioGroup } from '../../components/element-groups/radio-group';
import { InputRadioContent, InputRadioItem } from '../../types/ui/radioInputGroup';
import { FormProvider, useForm } from 'react-hook-form';
import { InputText } from '../../ui/inputs/input-text';
import { InputPassword } from '../../ui/inputs/input-password';
import { InputPercent } from '../../ui/inputs/input-percent';
import { CheckboxGroup } from '../../components/element-groups/checkbox-group';
import { Dropdown } from '../../ui/dropdown';
import { Accordion } from '../../ui/accordion';
import { format } from 'date-fns';
import { FilesUploadingGroup } from '../../components/element-groups/files-uploading-group';
import { filesUploadingExample } from '../../consts/filesUploading';
import { Subscribe } from '../../components/subscribe/Subscribe';
import { subscribeAdministrationServices } from '../../components/subscribe/consts';
import s from './styles.module.scss';

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

const ExampleUiForm = () => {
  const methods = useForm();

  const inputFileHandler = (file: File) => {
    console.log(file);
  };

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className={s.mainForm} onSubmit={methods.handleSubmit(onSubmit)}>
        <Button
          type="submit"
          size={ButtonSize.XL}
          color={ButtonColor.Green}
          Icon={ICONS.ArrowRight}
          onClick={() => console.log('button')}
          iconRight
        >
          Next, Add-Ons
        </Button>
        <Button size={ButtonSize.M} color={ButtonColor.Grey} Icon={ICONS.Trash} onClick={() => console.log('button')}>
          Remove
        </Button>
        <Button size={ButtonSize.S} color={ButtonColor.White} Icon={ICONS.Edit} onClick={() => console.log('hey')}>
          Edit
        </Button>
        <Button
          size={ButtonSize.XS}
          color={ButtonColor.White}
          Icon={ICONS.Close}
          onClick={() => console.log('button')}
        />
        <InputFile
          type={InputFileType.Solid}
          title="Second ID Document"
          Icon={ICONS.Paperclip}
          size={InputFileSize.Fix}
          onUpload={inputFileHandler}
        />
        <InputFile
          type={InputFileType.Dashed}
          title="Second ID Document"
          Icon={ICONS.Paperclip}
          size={InputFileSize.Fix}
          onUpload={inputFileHandler}
        />
        {filesUploadingExample.map(({ name, withCitizenship }) => (
          <FilesUploadingGroup key={name} title={name} withCitizenship={withCitizenship} />
        ))}
        <RadioGroup radioList={inputRadioList} groupName="isMan" />
        <InputText placeholder="Full Legal Name" value="Full Legal Name" />
        <InputPassword />
        <InputPercent name="% in the Carried Interest" onClick={() => console.log('button')} />
        <Dropdown
          optionClickHandler={() => console.log('hey')}
          createPersonClickHandler={() => console.log('dropdown new')}
          title="Add Manager"
          optionList={dropDownOptionsList}
        />
        <CheckboxGroup checkboxList={checkboxList} groupName="planet" />
        <Accordion price={5000} title="SPV" contentList={accordionList} />
        <Subscribe
          title="Do you need administration services?"
          value="admin"
          contentList={subscribeAdministrationServices}
        />
      </form>
    </FormProvider>
  );
};
export { ExampleUiForm };
