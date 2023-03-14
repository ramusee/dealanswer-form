import React from 'react';
import { Button } from '../../components/button';

import { BUTTON_COLOR, BUTTON_ICON, BUTTON_SIZE } from '../../consts/button';

import s from './styles.module.scss';

const MainPage = () => {
  return (
    <main className={s.main}>
      <Button
        size={BUTTON_SIZE.XL}
        color={BUTTON_COLOR.GREEN_BASE}
        title="Next, Add-Ons"
        icon={BUTTON_ICON.ARROW_RIGHT}
        onClick={() => console.log('hey')}
      />
      <Button
        size={BUTTON_SIZE.L}
        color={BUTTON_COLOR.WHITE_UPLOAD}
        icon={BUTTON_ICON.PAPERCLIP}
        title="Next, Add-Ons"
        onClick={() => console.log('hey')}
      />
      <Button
        size={BUTTON_SIZE.XS}
        color={BUTTON_COLOR.WHITE_UPLOAD}
        icon={BUTTON_ICON.CLOSE}
        onClick={() => console.log('hey')}
      />
    </main>
  );
};

export { MainPage };
