import React from 'react';
import styles from './header.css';
import {SearchBlock} from './SearchBlock';
import {ThreadTitle} from './ThreadTitle';
import {SortBlock} from './SortBlock';
import {GenericList} from '../MyList';
import {merge} from '../../utils/js/merge';
import {generateId} from '../../utils/react/generateRandomIndex';
import {Menu} from './Menu';

const list = [
  {
    // id: 'id1',
    text: 'Menu item 1',
    className: 'menu-item',
    // onClick: (id: string) => handleItemClick(),
    As: 'li' as const
  },
  {
    // id: 'id2',
    text: 'Menu item 2',
    className: 'menu-item',
    // onClick: (id: string) => handleItemClick(),
    As: 'li' as const
  },
  {
    // id: 'id3',
    text: 'Menu item 3',
    className: 'menu-item',
    // onClick: (id: string) => handleItemClick(),
    As: 'li' as const
  }
].map(generateId);

const handleItemClick = (id: string) => {
  console.log('click', id);
}

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <br/>
      <Menu button={<button type="button">Menu</button>}>
        <ul className={styles.menu}>
          <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
        </ul>
      </Menu>
    </header>
  );
}
