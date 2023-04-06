import React, { FC } from 'react';
import { Button } from '../../ui/button';
import { NavigationButtonsProps } from './types';

import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';

import s from './styles.module.scss';

const NavigationButtons: FC<NavigationButtonsProps> = ({ nextButtonHandler, backButtonHandler, nextButtonTitle }) => {
  return (
    <div className={s.buttonTabsContainer}>
      <div className={s.backButton}>
        <Button
          type="button"
          onClick={backButtonHandler}
          size={ButtonSize.XL}
          color={ButtonColor.White}
          Icon={ICONS.ArrowLeft}
        >
          Back
        </Button>
      </div>
      <div className={s.nextButton}>
        <Button
          onClick={nextButtonHandler}
          size={ButtonSize.XL}
          color={ButtonColor.Green}
          Icon={ICONS.ArrowRight}
          iconRight
          type="submit"
        >
          {nextButtonTitle ? `Next, ${nextButtonTitle}` : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export { NavigationButtons };
