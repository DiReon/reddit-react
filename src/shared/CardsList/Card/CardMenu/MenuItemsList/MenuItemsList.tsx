import React from 'react';
import styles from './menuitemslist.css';
import {EColors, Text} from '../../../../Text';
import {EIcon, Icon} from '../../../../Icon';

interface MenuItemsListProps {
  postId: string;
}

export function MenuItemsList({postId}: MenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcon.comment} size={10} />
        <Text size={10} color={EColors.gray99}>Комментарии</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcon.share} size={12} />
        <Text size={12} color={EColors.gray99}>Поделиться</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem} onClick={() => console.log('close', postId)}>
        <Icon name={EIcon.block} size={14}/>
        <Text size={14} color={EColors.gray99}>Скрыть</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcon.save} size={16}/>
        <Text size={16} color={EColors.gray99}>Сохранить</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcon.warning} size={18}/>
        <Text size={20} color={EColors.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
