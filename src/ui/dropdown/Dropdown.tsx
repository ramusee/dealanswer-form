import React, { FC, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { DropdownProps } from './types';

import { useOnClickOutside } from '../../hooks/useOnclickOutside';
import s from './styles.module.scss';

const Dropdown: FC<DropdownProps> = ({
  title,
  optionList,
  optionClickHandler,
  createPersonClickHandler,
  isDisabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const dropdownRef = useRef(null);

  const dropdownClassName = cn(s.dropdown, isOpen && s.dropdownOpen, isDisabled && s.disabled);
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
    () => optionList.filter(item => item.toLowerCase().includes(inputValue.trim().toLowerCase())),
    [optionList, inputValue],
  );

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
          placeholder={title}
        />
        <button type="button" className={dropButtonClassName} onClick={openClickHandler}>
          {title}
        </button>
      </div>
      {isOpen && (
        <div className={s.content}>
          <button
            type="button"
            onClick={() => {
              createPersonClickHandler();
              setIsOpen(false);
            }}
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
