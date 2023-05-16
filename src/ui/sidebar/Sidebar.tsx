import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { SidebarProps } from './types';
import { Button } from '../button';
import { ICONS } from '../../consts/icons';
import { SectionTitle } from '../../components/section-title';

import s from './styles.module.scss';

const Sidebar: FC<SidebarProps> = ({ title, subtitle = '', active, setActive, children }) => {
  const sidebarClassName = cn(s.sidebar, active && s.active);
  const portalElement = document.getElementById('root');

  if (!active || !portalElement) {
    return null;
  }
  return createPortal(
    <div className={sidebarClassName} onClick={setActive}>
      <div className={s.blackout} />
      <div className={s.content} onClick={e => e.stopPropagation()}>
        <div className={s.header}>
          <div className={s.buttonContainer}>
            <Button size="XS" color="Grey" Icon={ICONS.Close} onClick={setActive} />
          </div>
        </div>
        <SectionTitle title={title} subTitle={subtitle} />
        {children}
      </div>
    </div>,
    portalElement,
  );
};

export { Sidebar };
