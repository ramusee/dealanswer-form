import React, { FC, useRef, useState } from 'react';
import cn from 'classnames';
// import { ReactComponent as ArrowBottom } from '../../assets/icons/arrowBottom.svg';
import { DropdownProps } from './types';

import s from './styles.module.scss';
import { useOnClickOutside } from '../../hooks/useOnclickOutside';

const Dropdown: FC<DropdownProps> = ({
  name,
  optionsList,
  currentOption,
  isDisabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef(null);

  const dropdownClassName = cn(
    s.dropdown,
    isOpen && s.dropdownOpen,
    isOpen && s.rotate,
  );
  const inputDropClassName = cn(s.inputHidden, isOpen && s.showInput);
  const addButtonClassName = cn(s.option, s.addButton);
  const contentClassName = cn(s.content, isOpen && s.openContent);

  const optionClickHandler = (option: string) => {
    console.log(option);
  };
  const openClickHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  const options = optionsList.map(option => {
    const optionClassName = cn(
      s.option,
      option === currentOption && s.contentCurrentOption,
    );
    return (
      <span
        className={optionClassName}
        key={option}
        onClick={() => {
          optionClickHandler(option);
        }}
      >
        {option}
      </span>
    );
  });

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className={dropdownClassName}>
      <div className={s.buttonContainer}>
        <input className={inputDropClassName} type="text" placeholder={name} />
        <button onClick={openClickHandler}>{name}</button>
      </div>
      {isOpen && (
        <div className={contentClassName}>
          <button
            onClick={() => console.log('hey')}
            className={addButtonClassName}
          >
            <span>Create new person</span>
          </button>
          {options}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
