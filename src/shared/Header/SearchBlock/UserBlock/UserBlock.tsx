import React from 'react';
import styles from './userblock.css';
import {EColors, Text} from '../../../Text';
import {AnonimIcon} from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {
  const REDIRECT_URL= process.env.NODE_ENV === 'development' ? 'http://localhost:3000/auth' : 'https://reddit-react-go.herokuapp.com/auth';
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${REDIRECT_URL}&duration=permanent&scope=read submit identity`}
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
        {loading ?
          <Text size={20} color={EColors.black}>Загрузка...</Text> :
          <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
        }
      </div>
    </a>
  );
}
