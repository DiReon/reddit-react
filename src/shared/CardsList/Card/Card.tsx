import React from 'react';
import styles from './card.css';
import {ImgBlock} from './ImgBlock';
import {ICardData} from '../CardsList';
import {CardInfo} from './CardInfo';
import {CardMenu} from './CardMenu';
import {CardControls} from './CardControls';

export function Card({data: {text, postUrl, user, postDate, postImgUrl}}: ICardData) {

  return (
    <li className={styles.card}>

      <CardInfo text={text} postUrl={postUrl} user={user} postDate={postDate}/>

      <ImgBlock imgUrl={postImgUrl} />

      <CardMenu />

      <CardControls />

    </li>
  );
}
