import React from 'react';
import styles from './userblock.css';
import {EColors, Text} from '../../../Text';
import {AnonimIcon} from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=dYfNJyd477kgREKoAlXnoQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="User avatar" className={styles.avatarImage} />
          : <AnonimIcon />
          // : <Icon name={EIcon.save} size={16}/>
          // : <MenuIcon />
          }
      </div>

      <div className={styles.username}>
        <br/>
        <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
