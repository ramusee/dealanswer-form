import React, { FC } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownBlockProps } from './types';

import { ButtonColor, ButtonSize } from '../../types/ui/button';
import { ICONS } from '../../consts/icons';
import { Button } from '../button';

import s from './styles.module.scss';

const DropdownBlock: FC<DropdownBlockProps> = ({
  title,
  optionList,
  percent,
  addPersonHandler,
  editPersonHandler,
  removePersonHandler,
  createPersonClickHandler,
  targetMembers,
}) => {
  const optionClickHandler = (option: string) => {
    addPersonHandler(option);
  };
  return (
    <div className={s.selectedBlockContainer}>
      {!targetMembers.length ? (
        <Dropdown
          title={title}
          optionList={optionList}
          optionClickHandler={optionClickHandler}
          createPersonClickHandler={createPersonClickHandler}
        />
      ) : (
        targetMembers.map(member => (
          <div key={member} className={s.selectedBlock}>
            <span>{member}</span>
            <div className={s.buttonContainer}>
              <Button size={ButtonSize.M} color={ButtonColor.White} Icon={ICONS.Edit} onClick={editPersonHandler}>
                Edit
              </Button>
              <Button
                size={ButtonSize.M}
                color={ButtonColor.Grey}
                Icon={ICONS.Trash}
                onClick={() => {
                  removePersonHandler(member);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export { DropdownBlock };
