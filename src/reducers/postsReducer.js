import { ACTIONS_NAMES } from '../constants';

const INITIAL_STATE = {
  posts: [],
  loading: false,
  errorMessage: '',
}

const users = (state = INITIAL_STATE, action) => {
  const { type } = action;
  const { getPosts, getPostForUser } = ACTIONS_NAMES;
  switch(type) {
    case getPosts:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        errorMessage: '',
      }
    case getPostForUser:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        errorMessage: '',
      }
    default:
      return state;
  }
}

export default users;