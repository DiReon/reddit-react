import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
//
// type Props = {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
// }

export function CommentForm() {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [valueError, setValueError] = useState('');
  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    setValueError(validateValue());
    if (isFormValid) {
      alert('Форма отправлена!');
    }
  }

  const isFormValid = !validateValue()

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setValue(event.target.value);
    setIsTouched(true);
  }

  function validateValue() {
    if (value.length <=3) return 'Меньше 4х символов';
    return '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} aria-invalid={valueError ? 'true' : undefined}/>
      {isTouched && valueError && (<div>{valueError}</div>)}
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
