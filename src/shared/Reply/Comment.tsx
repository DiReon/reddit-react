import React, {useState} from 'react';
import styles from './comment.css';
import {EIcon, Icon} from '../Icon';
import {EColors, Text} from '../Text';
import {ReplyUncontrolledForm} from '../ReplyForm';
import {ReplyControlledForm} from '../ReplyForm';

export function Comment() {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);

  return (
    <div>
      <div className={styles.commentInfoContainer}>
        <div className={styles.avatar}></div>
        <div className={styles.author}>Михаил Рогов</div>
        <div className={styles.timestamp}>1 час назад</div>
      </div>
      <p>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.</p>
      <ul className={styles.actions}>
        <li className={styles.menuItem} onClick={() => {setIsReplyFormOpen(true)}}>
          <Icon name={EIcon.comment} size={14} />
          <Text size={14} color={EColors.gray99}>Ответить</Text>
        </li>

        <li className={styles.menuItem}>
          <Icon name={EIcon.share} size={14} />
          <Text size={14} color={EColors.gray99}>Поделиться</Text>
        </li>

        <li className={styles.menuItem}>
          <Icon name={EIcon.warning} size={14}/>
          <Text size={14} color={EColors.gray99}>Пожаловаться</Text>
        </li>
      </ul>
      {isReplyFormOpen && (
        <div>
          <ReplyUncontrolledForm />
          <ReplyControlledForm />
        </div>
      )}
    </div>
  );
}
