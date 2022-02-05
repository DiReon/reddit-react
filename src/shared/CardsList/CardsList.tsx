import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import {postsContext} from '../../context/postsContext';

export interface IUser {
  name: string;
  avatarUrl: string;
}

export interface ICardData{
  data: {
    text: string;
    postUrl: string;
    user: IUser;
    postDate: string,
    postImgUrl: string
  }
}
//
// const mockCardData = {
//   text: 'Следует отметить, что новая модель организационной деятельности...',
//   postUrl: '#Some_URL',
//   user: {
//     name: 'Дмитрий Гришин',
//     avatarUrl: 'https://cdn.dribbble.com/users/1338391/avatars/small/6400fbd7246ce73a2fab2ab9e3b8453b.jpg?1622096188',
//   },
//   postDate: '2021/01/10 04:05:00'
// }

export function CardsList() {
  const postsData = useContext(postsContext);
  return (
    <ul className={styles.cardsList}>
      { postsData.map(item => <Card data={item.data}/>) }
    </ul>
  );
}
