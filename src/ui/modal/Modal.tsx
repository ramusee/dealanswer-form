import React, { FC, useEffect } from 'react';

import s from './styles.module.scss';
import { ModalProps } from './types';
import { Button } from '../button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';

const Modal: FC<ModalProps> = ({ isActive, setIsActive, children }) => {
  useEffect(() => {
    if (!isActive) {
      return;
    }
    const windowWidth = window.innerWidth;
    const documentWidth = document.documentElement.clientWidth;
    const scrollbarWidth = windowWidth - documentWidth;

    document.body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    };
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <div className={s.modal}>
      <div className={s.modalContent} style={{ paddingRight: isActive && '8px' }}>
        {children}
        <Button size={ButtonSize.M} color={ButtonColor.Green} onClick={() => setIsActive(false)}>
          Close
        </Button>
      </div>
    </div>
  );
};

export { Modal };
