import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { addOnsFieldset, exemptReportAdvisorStatusDesc, FieldsetAddOnsName, sectionTitleAddOns } from '../consts';
import { previousProgressStep } from '../../../../store/reducers/common';
import { AddOnsTabProps } from '../types';
import { IAddOnsTabOne } from '../../../../types/projects/spv/addOns';
import { selectAddOnsTabOne, setAddOnsTabOne } from '../../../../store/reducers/spv';

import { Fieldset } from '../../../../components/fieldset/Fieldset';
import { SectionTitle } from '../../../../components/section-title';
import { NavigationButtons } from '../../../../components/navigation-buttons';
import { RadioGroup } from '../../../../components/element-groups/radio-group';
import { CheckboxGroup } from '../../../../components/element-groups/checkbox-group';
import { Subscribe } from '../../../../components/subscribe/Subscribe';

import s from '../styles.module.scss';

const AddOnsTabOne: FC<AddOnsTabProps> = ({ changeCurrentTab }) => {
  const addOnsTabOne = useSelector(selectAddOnsTabOne);
  const dispatch = useDispatch();

  const methods = useForm<IAddOnsTabOne>({
    defaultValues: addOnsTabOne,
  });
  const { watch } = methods;
  const allFields = watch();
  const cloneAllFields = structuredClone(allFields);

  const isAdvisorStatus = addOnsTabOne.exemptReportAdvisorStatus.radioValue === 'No';
  useEffect(() => {
    dispatch(setAddOnsTabOne(cloneAllFields));
  }, [
    cloneAllFields.legalDocsManageCompany.radioValue,
    cloneAllFields.legalDocsSpecMember.radioValue,
    cloneAllFields.bankCryptoAccountManageCompany?.length,
    cloneAllFields.bankCryptoAccountSpecMember?.length,
    cloneAllFields.bankCryptoAccountSpv?.length,
    cloneAllFields.brokerAccountSpv?.length,
    cloneAllFields.exemptReportAdvisorStatus.radioValue,
    cloneAllFields.eraSpv.radioValue,
    cloneAllFields.adminServicesSubscribe,
    cloneAllFields.taxFillingServicesSubscribe,
  ]);
  const onSubmit = (data: IAddOnsTabOne) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={s.addOnsContainer}>
        <SectionTitle title={sectionTitleAddOns} />
        <form className={s.addOnsForm} onSubmit={methods.handleSubmit(onSubmit)}>
          <Fieldset
            title={addOnsFieldset.legalDocsManageCompany.title}
            subTitle={addOnsFieldset.legalDocsManageCompany.subTitle}
          >
            <RadioGroup
              radioList={addOnsFieldset.legalDocsManageCompany.radioList || []}
              groupName={FieldsetAddOnsName.legalDocsManageCompany}
            />
          </Fieldset>
          <Fieldset
            title={addOnsFieldset.legalDocsSpecMember.title}
            subTitle={addOnsFieldset.legalDocsSpecMember.subTitle}
          >
            <RadioGroup
              radioList={addOnsFieldset.legalDocsSpecMember.radioList || []}
              groupName={FieldsetAddOnsName.legalDocsSpecMember}
            />
          </Fieldset>
          <Fieldset title={addOnsFieldset.bankCryptoAccountManageCompany.title}>
            <CheckboxGroup
              groupName={FieldsetAddOnsName.bankCryptoAccountManageCompany}
              checkboxList={addOnsFieldset.bankCryptoAccountManageCompany.checkboxList || []}
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
          <Fieldset
            title={addOnsFieldset.exemptReportAdvisorStatus.title}
            subTitle={addOnsFieldset.exemptReportAdvisorStatus.subTitle}
            infoText={exemptReportAdvisorStatusDesc}
          >
            <RadioGroup
              radioList={addOnsFieldset.exemptReportAdvisorStatus.radioList || []}
              groupName={FieldsetAddOnsName.exemptReportAdvisorStatus}
            />
          </Fieldset>
          {isAdvisorStatus && (
            <Fieldset title={addOnsFieldset.eraSpv.title} subTitle={addOnsFieldset.eraSpv.subTitle}>
              <RadioGroup radioList={addOnsFieldset.eraSpv.radioList || []} groupName={FieldsetAddOnsName.eraSpv} />
            </Fieldset>
          )}
          <Subscribe
            title={addOnsFieldset.adminServicesSubscribe.title}
            value={FieldsetAddOnsName.adminServicesSubscribe}
            contentList={addOnsFieldset.adminServicesSubscribe.subscribeItemList || []}
          />
          <Subscribe
            title={addOnsFieldset.taxFillingServicesSubscribe.title}
            value={FieldsetAddOnsName.taxFillingServicesSubscribe}
            contentList={addOnsFieldset.taxFillingServicesSubscribe.subscribeItemList || []}
          />
          <NavigationButtons backButtonHandler={() => dispatch(previousProgressStep())} />
        </form>
      </div>
    </FormProvider>
  );
};

export { AddOnsTabOne };
