import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {useRecoilState} from "recoil";
import {textState} from "../../recoil.atoms";

interface ICommentFormValues {
  commentText?: string
}

export function CommentForm() {
  const [comment, setComment] = useRecoilState(textState);
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
    setComment(event.target.value);
  }

  function validateValue() {
    if (comment.length <= 3) return 'Меньше 4х символов';
    return '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
              className={styles.input}
              value={comment}
              onChange={handleChange}
              aria-invalid={valueError ? 'true' : undefined}
            />
      {isTouched && valueError && (<div>{valueError}</div>)}
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
