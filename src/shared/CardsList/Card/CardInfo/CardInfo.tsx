import React, {useState} from 'react';
import styles from './cardinfo.css';
import {IUser} from '../../CardsList';
import {Post} from '../../../Post';
import { Link } from 'react-router-dom';

export function CardInfo({text, postUrl, user, postDate}: {text: string; postUrl: string, user: IUser, postDate: string}) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={user.avatarUrl}
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>{user.name}</a>
        </div>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            {postDate}
          </span>
      </div>
      <h2 className={styles.title}>
        <Link to="/posts/1" className={styles.postLink}>
          {text}
        </Link>
      </h2>
    </div>
  );
}
