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
    text: 'Menu item 1',
    As: 'li' as const
  },
  {
    text: 'Menu item 2',
    As: 'li' as const
  },
  {
    text: 'Menu item 3',
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
      <Menu button={<button>Menu</button>}>
        <ul>
          <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
        </ul>
      </Menu>
    </header>
  );
}
