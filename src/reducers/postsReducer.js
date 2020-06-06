import { ACTIONS_NAMES } from '../constants';

const INITIAL_STATE = {
  posts: [],
  loadingPosts: false,
  loadingComments: false,
  errorMessagePost: '',
}

const posts = (state = INITIAL_STATE, action) => {
  const { type } = action;
  const {
    loading,
    getPostForUser,
    errorMessagePost,
    errorMessageComments,
    loadingComments,
  } = ACTIONS_NAMES;

  switch(type) {
    case loading:
      return {
        ...state,
        loadingPosts: action.payload,
        errorMessagePost: '',
      }
    case loadingComments:
      return {
        ...state,
        loadingComments: action.payload,
        errorMessageComments: ''
      }
    case getPostForUser:
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false,
        errorMessagePost: '',
      }
    case errorMessagePost:
      return {
        ...state,
        loadingPosts: false,
        errorMessagePost: action.payload,
      }
    case errorMessageComments:
      return {
        ...state,
        loadingComments: false,
        errorMessageComments: action.payload,
      }
    default:
      return state;
  }
}

export default posts;