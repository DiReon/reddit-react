import React from 'react';
import styles from './imgblock.css';

export function ImgBlock({imgUrl}: {imgUrl: string}) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={imgUrl}/>
    </div>
  );
}
