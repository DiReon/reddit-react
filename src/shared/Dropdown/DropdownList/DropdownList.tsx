import React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './dropdownlist.css';

interface IDropdownListProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function DropdownList({children, onClick}: IDropdownListProps) {
  const node = document.querySelector('#dropdown_root');
  if (!node) {
    return null
  }
  return ReactDOM.createPortal((
    <div className={styles.listContainer}>
      <div className={styles.list} onClick={onClick}>
        {children}
      </div>
    </div>
  ), node);
}
