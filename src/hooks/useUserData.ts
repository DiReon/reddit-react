import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {meRequestAsync} from '../store/me/actions';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);
  const token = useSelector<RootState, string>(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync());
  }, [token]);

  return {loading, data};
}
