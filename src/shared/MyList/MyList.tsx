import React from 'react';
import styles from './mylist.css';

interface IItem {
  id: string;
  text: string;
  className?: string;
  onClick: (id: string) => void;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({As = 'div', text, onClick, className, id, href}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  )
}
//
// export function MyList({list}: IGenericListProps) {
//   return (
//     <ul>
//       { list.map(item =>
//         <li key={item.id} onClick={() => item.onClick(item.id)}>{item.value}</li>
//       )}
//     </ul>
//   );
// }

