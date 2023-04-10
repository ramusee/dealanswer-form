import React, { FC, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownBlockProps } from './types';

import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';
import { Button } from '../button';

import s from './styles.module.scss';

const DropdownBlock: FC<DropdownBlockProps> = ({ title, optionList, percentSpv }) => {
  const [currentMember, setCurrentMember] = useState('');
  const optionClickHandler = (option: string) => {
    setCurrentMember(option);
  };
  return (
    <>
      {!currentMember ? (
        <Dropdown
          title={title}
          optionList={optionList}
          optionClickHandler={optionClickHandler}
          newEntityClickHandler={() => console.log('newentity')}
        />
      ) : (
        <div className={s.dropdownBlockContainer}>
          <span>{currentMember}</span>
          <div className={s.buttonContainer}>
            <Button size={ButtonSize.M} color={ButtonColor.White} Icon={ICONS.Edit} onClick={() => console.log('edit')}>
              Edit
            </Button>
            <Button
              size={ButtonSize.M}
              color={ButtonColor.Grey}
              Icon={ICONS.Trash}
              onClick={() => setCurrentMember('')}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export { DropdownBlock };
