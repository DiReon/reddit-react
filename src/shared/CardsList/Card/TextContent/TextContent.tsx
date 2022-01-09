import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/1338391/avatars/small/6400fbd7246ce73a2fab2ab9e3b8453b.jpg?1622096188"
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
              4 часа назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности Следует...
        </a>
      </h2>
    </div>
  );
}
