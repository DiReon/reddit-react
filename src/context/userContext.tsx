import React, {useEffect} from 'react';
import {useUserData} from '../hooks/useUserData';
import {useDispatch} from 'react-redux';
import {saveToken} from '../store/reducer';


interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({children}: { children: React.ReactNode }) {
  const {data} = useUserData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken())
  }, [])

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}
