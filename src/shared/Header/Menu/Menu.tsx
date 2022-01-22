import React from 'react';
import styles from './menu.css';

interface IDropDownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Menu({button, children}: IDropDownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
