import {Action, ActionCreator, Reducer} from 'redux';
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction
} from './me/actions';
import {meReducer, MeState} from './me/reducer';
import {ThunkAction} from 'redux-thunk';

export type RootState = {
  commentText: string;
  token: string;
  me: MeState
}
const initialState: RootState = {
  commentText: "Hello Skillbox",
  token: '',
  me: {
    loading: false,
    error: '',
    data: {}
  }
}
const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}
const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => {
  return {
    type: UPDATE_COMMENT,
    text
  }
}

export const setToken: ActionCreator<SetTokenAction> = (token) => {
  return {
    type: SET_TOKEN,
    token
  }
}

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  if (window.__token__) {
    dispatch(setToken(window.__token__))
  }
}

type MyAction = UpdateCommentAction | SetTokenAction | MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state: RootState = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
}
