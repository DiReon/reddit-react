import React from 'react';
import styles from './cardmenu.css';
import {MenuIcon} from '../../../Icons';
import {Dropdown} from '../../../Dropdown';
import {MenuItemsList} from './MenuItemsList';

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <Dropdown
      button={
        <button className={styles.menuButton}>
          <MenuIcon />
        </button>
      }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId={'1234'} />
          <button className={styles.closeButton}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
