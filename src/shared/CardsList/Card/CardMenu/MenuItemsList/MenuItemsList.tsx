import React from 'react';
import styles from './menuitemslist.css';
import {BlockIcon, WarningIcon} from '../../../../Icons';

interface MenuItemsListProps {
  postId: string;
}

export function MenuItemsList({postId}: MenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log('close', postId)}>
        <BlockIcon />
        Скрыть
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <WarningIcon />
        Пожаловаться
      </li>
    </ul>
  );
}
