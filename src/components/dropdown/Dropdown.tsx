import React, { FC, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
// import { ReactComponent as ArrowBottom } from '../../assets/icons/arrowBottom.svg';
import { DropdownProps } from './types';

import s from './styles.module.scss';
import { useOnClickOutside } from '../../hooks/useOnclickOutside';

const Dropdown: FC<DropdownProps> = ({
  name,
  optionsList,
  isDisabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const dropdownRef = useRef(null);

  const dropdownClassName = cn(s.dropdown, isOpen && s.dropdownOpen);
  const dropButtonClassName = cn(s.dropButton, isOpen && s.rotate);
  const inputDropClassName = cn(s.inputHidden, isOpen && s.showInput);
  const addButtonClassName = cn(s.option, s.addButton);

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredOptions = useMemo(
    () =>
      optionsList.filter(item =>
        item.toLowerCase().includes(inputValue.trim().toLowerCase()),
      ),
    [optionsList, inputValue],
  );

  const optionClickHandler = (option: string) => {
    console.log(option);
  };

  const openClickHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  const filteredOptionsElems = filteredOptions.map(option => {
    return (
      <span
        className={s.option}
        key={option}
        onClick={() => {
          optionClickHandler(option);
        }}
      >
        {option}
      </span>
    );
  });

  return (
    <div ref={dropdownRef} className={dropdownClassName}>
      <div className={s.buttonContainer}>
        <input
          onChange={inputHandler}
          value={inputValue}
          className={inputDropClassName}
          type="text"
          placeholder={name}
        />
        <button className={dropButtonClassName} onClick={openClickHandler}>
          {name}
        </button>
      </div>
      {isOpen && (
        <div className={s.content}>
          <button
            onClick={() => console.log('hey')}
            className={addButtonClassName}
          >
            <span>Create new person</span>
          </button>
          {filteredOptionsElems}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
