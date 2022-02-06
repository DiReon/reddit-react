import React, {useState} from 'react';
import styles from './cardinfo.css';
import {IUser} from '../../CardsList';
import {Post} from '../../../Post';

export function CardInfo({text, postUrl, user, postDate}: {text: string; postUrl: string, user: IUser, postDate: string}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <a href={postUrl} className={styles.postLink} onClick={() => {setIsModalOpen(true)}}>
          {text}
        </a>
      </h2>
      {isModalOpen && (
        <Post onClose={() => {setIsModalOpen(false)}}/>
      )}
    </div>
  );
}
