import React, {FormEvent, useRef} from 'react';
import styles from './replyform.css';

export function ReplyUncontrolledForm() {
  const ref = useRef<HTMLTextAreaElement>(null);
  if (ref.current) {
    ref.current.focus();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <textarea className={styles.input} defaultValue="Михаил Рогов," ref={ref => ref && ref.focus()} />
        <button type="submit" className={styles.button}>Отправить</button>
      </form>
    );
}
