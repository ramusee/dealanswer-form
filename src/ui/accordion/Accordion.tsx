import React, { FC, useState } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { AccordionProps } from './types';

import s from './styles.module.scss';
import cn from 'classnames';

const Accordion: FC<AccordionProps> = ({ title, contentList, price }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const accordionClassName = cn(s.accordion, isOpen && s.accordionOpen);
  const buttonClassName = cn(s.button, isOpen && s.rotate);

  const openClickHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={accordionClassName}>
      <div className={s.buttonContainer}>
        <button type="button" className={buttonClassName} onClick={openClickHandler}>
          {title}
          <span>${price.toLocaleString('en')}</span>
        </button>
        <button type="button" className={s.iconButton}>
          <CloseIcon />
        </button>
      </div>
      <div className={s.content}>
        {contentList.map((item, index) => (
          <span key={index} className={s.contentItem}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Accordion };
