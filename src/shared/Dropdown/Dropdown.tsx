import React from 'react';
import styles from './dropdown.css';
import {DropdownList} from './DropdownList';

interface IDropDownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({button, children}: IDropDownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
      <div className={styles.container}>
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {button}
        </div>
        {isDropdownOpen && (
          <DropdownList children={children} onClick={() => setIsDropdownOpen(false)} />
        )}
      </div>
  );
}
