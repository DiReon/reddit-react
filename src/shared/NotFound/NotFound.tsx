import React from 'react';
import styles from './notfound.css';
import {Link} from 'react-router-dom';

export function NotFound() {
  return (
    <div className={styles.container}>
      <h3>404 Error</h3>
      <h3>Page Not Found</h3>
      <Link to="/" className={styles.link}>Home</Link>
    </div>
  );
}
