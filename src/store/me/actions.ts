import {Action, ActionCreator} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState, setToken} from '../reducer';
import axios from 'axios';

export const ME_REQUEST = 'ME_REQUEST';

export type MeRequestAction = {
  type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequestAction> = () => {
  return {
    type: ME_REQUEST
  }
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data) => {
  return {
    type: ME_REQUEST_SUCCESS,
    data
  }
}

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => {
  return {
    type: ME_REQUEST_ERROR,
    error
  }
}

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  axios.get('https://oauth.reddit.com/api/v1/me', {
    headers: {Authorization: `bearer ${getState().token}`}
  })
    .then((resp) => {
      const userData = resp.data;
      console.log(userData);
      const myUserData = {name: userData.name, iconImg: userData.snoovatar_img};
      dispatch(meRequestSuccess(myUserData));
    })
    .catch((error) => {
      console.log(error);
      dispatch(meRequestError(error));
      localStorage.removeItem('token');
    })
}
