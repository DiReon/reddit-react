import {useDispatch, useSelector} from 'react-redux';
import {RootState, updateComment} from '../../store/reducer';
import React, {ChangeEvent, FormEvent} from 'react';
import {CommentForm} from '../CommentForm';
import {RecoilRoot} from "recoil";

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    console.log(value);
    event.preventDefault();
  }

  return (
    <CommentForm/>
  );
}
