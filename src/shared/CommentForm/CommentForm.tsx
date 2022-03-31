import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentform.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, updateComment} from '../../store';

export function CommentForm() {
  // const store = useStore<RootState>();
  // const value = store.getState().commentText;
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  // const {onChange} = useContext(commentContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
    // onChange(event.target.value);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
