import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './replyform.css';

export function ReplyControlledForm() {
  const [value, setValue] = useState('Михаил Рогов,');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('Submitted', value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} ref={ref => ref?.focus()}/>
      <button type="submit" className={styles.button}>Отправить</button>
    </form>
  );
}
