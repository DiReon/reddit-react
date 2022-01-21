import {preventDefault} from '../utils/react/preventDefault';
import {stopPropagation} from '../utils/react/stopPropagation';
import {getValue} from '../utils/react/pickFromSynteticEvent';
import React from 'react';

function InputExample({value, onChange}: any) {
  return (
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  )
}

function compose<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previous, fn) => fn(previous), initialValue);
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1}) // 1

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right
}

const comments = [{id: 22, text: 'abc'}, {id: 33, text: 'abcde'}];

// const filteredComments = comments.filter(pipe(pick('id'), isEqual(22)));

const createFilterBy = (field: string) => (value: number) => pipe(pick(field), isEqual(value));
const filterById = createFilterBy('id');

const filteredComments = comments.filter(filterById(22));
