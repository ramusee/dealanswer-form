import React, { FC, useState } from 'react';

import { FieldsetProps } from './types';
import { ReactComponent as InfoIcon } from '../../assets/icons/infoIcon.svg';
import { Modal } from '../../ui/modal';

import s from './styles.module.scss';

const Fieldset: FC<FieldsetProps> = ({ title, subTitle, children, infoText }) => {
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  const infoIconHandler = () => {
    setIsActiveModal(true);
  };

  return (
    <div className={s.fieldset}>
      <p className={s.title}>
        {title}
        {infoText && <InfoIcon onClick={infoIconHandler} />}
      </p>
      {subTitle && <span className={s.subtitle}>{subTitle}</span>}
      {children}
      <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
        <p>{infoText}</p>
      </Modal>
    </div>
  );
};

export { Fieldset };
