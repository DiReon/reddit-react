import React from 'react';
import styles from './commentform.css';
import {useFormik} from 'formik';

interface ICommentFormValues {
  commentText?: string
}

export function CommentForm() {

  const validate = (values: ICommentFormValues) => {
    const errors: ICommentFormValues = {};
    if (!values.commentText) {
      errors.commentText = 'Required';
    } else if (values.commentText.length <= 3) {
      errors.commentText = 'Must be more than 3 characters';
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      commentText: '',
    },
    validate,
    onSubmit: values => {
      alert('Форма отправлена' + values.commentText);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <textarea
        id="commentText"
        className={styles.input}
        {...formik.getFieldProps('commentText')}
        aria-invalid={formik.errors ? 'true' : undefined}/>

        {formik.touched.commentText && formik.errors && (<div>{formik.errors.commentText}</div>)}

      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
