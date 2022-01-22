import React from 'react';
import styles from './imgblock.css';

export function ImgBlock() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/users/59947/screenshots/17223814/media/6b4fff5aa2bf7e956386cbcfeb5e6513.jpg"/>
    </div>
  );
}
