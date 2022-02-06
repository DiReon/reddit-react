import React, {useEffect, useRef} from 'react';
import * as ReactDOM from 'react-dom';
import styles from './post.css';
import {CommentForm} from '../CommentForm';

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])
  const node = document.querySelector('#modal_root');
  if (!node) {return null};
  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное,</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное,</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное,</p>
      </div>
      <CommentForm />
    </div>), node
  );
}
