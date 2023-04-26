import React, { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from './types';
import { Button } from '../button';
import { ButtonColor, ButtonSize } from '../../types/ui/button';

import s from './styles.module.scss';

const Modal: FC<ModalProps> = ({ isActive, setIsActive, children }) => {
  useEffect(() => {
    if (!isActive) {
      return;
    }
    const windowWidth = window.innerWidth;
    const documentWidth = document.documentElement.clientWidth;
    const scrollbarWidth = windowWidth - documentWidth;

    if (scrollbarWidth > 0) {
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.overflowY = '';
      document.documentElement.style.paddingRight = '';
    };
  }, [isActive]);

  const portalElement = document.getElementById('root');

  if (!isActive || !portalElement) {
    return null;
  }

  return createPortal(
    <div className={s.modal} onClick={() => setIsActive(false)}>
      <div className={s.modalContent} onClick={e => e.stopPropagation()}>
        {children}
        <Button size={ButtonSize.M} color={ButtonColor.Green} onClick={() => setIsActive(false)}>
          Close
        </Button>
      </div>
    </div>,
    portalElement,
  );
};

export { Modal };
