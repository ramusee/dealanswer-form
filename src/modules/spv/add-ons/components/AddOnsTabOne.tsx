import React, { FC } from 'react';

import { SectionTitle } from '../../../../components/section-title';
import { sectionTitleInvestmentTerms } from '../../investment-terms/consts';
import { FormProvider, useForm } from 'react-hook-form';

import s from '../styles.module.scss';
import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { addOnsFieldset, FieldsetAddOnsName } from '../consts';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { CheckboxGroup } from '../../../../components/element-groups/checkbox-group';
import { AddOnsTabProps } from '../types';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { previousProgressStep } from '../../../../store/reducers/common';
import { useDispatch } from 'react-redux';
import { IAddOnsTabOne } from '../../../../types/projects/spv/addOns';
import { Subscribe } from '../../../../components/subscribe/Subscribe';

const AddOnsTabOne: FC<AddOnsTabProps> = ({ changeCurrentTab }) => {
  const dispatch = useDispatch();

  const methods = useForm<IAddOnsTabOne>();

  const onSubmit = (data: IAddOnsTabOne) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.addOnsContainer}>
        <SectionTitle title={sectionTitleInvestmentTerms} />
        <form className={s.addOnsForm} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset
            title={addOnsFieldset.legalDocsManageCompany.title}
            subTitle={addOnsFieldset.legalDocsSpecMember.subTitle}
          >
            <RadioGroup
              radioList={addOnsFieldset.legalDocsManageCompany.radioList || []}
              groupName={FieldsetAddOnsName.legalDocsManageCompany}
            />
          </Fieldset>
          <Fieldset
            title={addOnsFieldset.legalDocsSpecMember.title}
            subTitle={addOnsFieldset.bankCryptoAccountSpecMember.subTitle}
          >
            <RadioGroup
              radioList={addOnsFieldset.legalDocsSpecMember.radioList || []}
              groupName={FieldsetAddOnsName.legalDocsSpecMember}
            />
          </Fieldset>
          <Fieldset title={addOnsFieldset.bankAccountManageCompany.title}>
            <CheckboxGroup
              groupName={FieldsetAddOnsName.bankCryptoAccountManageCompany}
              checkboxList={addOnsFieldset.bankAccountManageCompany.checkboxList || []}
            />
          </Fieldset>
          <Fieldset title={addOnsFieldset.bankCryptoAccountSpecMember.title}>
            <CheckboxGroup
              groupName={FieldsetAddOnsName.bankCryptoAccountSpecMember}
              checkboxList={addOnsFieldset.bankCryptoAccountSpecMember.checkboxList || []}
            />
          </Fieldset>
          <Fieldset title={addOnsFieldset.bankCryptoAccountSpv.title}>
            <CheckboxGroup
              groupName={FieldsetAddOnsName.bankCryptoAccountSpv}
              checkboxList={addOnsFieldset.bankCryptoAccountSpv.checkboxList || []}
            />
          </Fieldset>
          <Fieldset title={addOnsFieldset.brokerAccountSpv.title}>
            <CheckboxGroup
              groupName={FieldsetAddOnsName.brokerAccountSpv}
              checkboxList={addOnsFieldset.brokerAccountSpv.checkboxList || []}
            />
          </Fieldset>
          <Subscribe
            title={addOnsFieldset.adminServicesSubscribe.title}
            value={FieldsetAddOnsName.adminServicesSubscribe}
            contentList={addOnsFieldset.adminServicesSubscribe.subscribeItemList || []}
          />
          <NavigationButtons backButtonHandler={() => dispatch(previousProgressStep())} />
        </form>
      </div>
    </FormProvider>
  );
};

export { AddOnsTabOne };
