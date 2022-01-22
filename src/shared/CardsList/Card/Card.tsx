import React from 'react';
import styles from './card.css';
import {ImgBlock} from './ImgBlock';
import {CardMenu} from './CardMenu';
import {CardControls} from './CardControls';
import {CardInfo} from './CardInfo/CardInfo';
import {ICardData} from '../CardsList';

export function Card({data: {text, postUrl, user, postDate}}: ICardData) {

  return (
    <li className={styles.card}>

      <CardInfo text={text} postUrl={postUrl} user={user} postDate={postDate}/>

      <ImgBlock />

      <CardMenu />

      <CardControls />

    </li>
  );
}
