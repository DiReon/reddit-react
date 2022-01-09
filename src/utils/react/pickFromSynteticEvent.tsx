import React from 'react';
//
// function Input({ onChange, value}: { onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)}/>
//   )
// }

function pickFromSynteticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) => (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key])
}

export const getValue = pickFromSynteticEvent<HTMLInputElement>()('value');

