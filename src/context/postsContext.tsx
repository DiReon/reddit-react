import React from 'react';
import {usePostsData} from '../hooks/usePostsData';
import {ICardData} from '../shared/CardsList';

export const postsContext = React.createContext<ICardData[]>([]);

export function PostsContextProvider({children}: {children: React.ReactNode}) {
  const [data] = usePostsData();
  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}
