import React from 'react';
import {useUserData} from '../hooks/useUserData';
import {useToken} from '../hooks/useToken';
import {useDispatch} from 'react-redux';
import {setToken} from '../store/reducer';


interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({children}: {children: React.ReactNode}) {
  const {data} = useUserData();
  const [token] = useToken();
  const dispatch = useDispatch();
  dispatch(setToken(token));

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}
