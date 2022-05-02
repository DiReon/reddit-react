import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {useFormik} from 'formik';
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";

interface ICommentFormValues {
    commentText?: string
}

class Comment {
    value = 'Hello from Mobx';

    constructor() {
        makeAutoObservable(this);
    }

    updateValue(value: string): void {
        this.value = value;
    }
}

const myComment = new Comment();

export const CommentForm = observer(() => {
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
        myComment.updateValue(event.target.value);
    }

    function validateValue() {
        if (myComment.value.length <= 3) return 'Меньше 4х символов';
        return '';
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={myComment.value} onChange={handleChange}
                      aria-invalid={valueError ? 'true' : undefined}/>
            {isTouched && valueError && (<div>{valueError}</div>)}
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );

})
