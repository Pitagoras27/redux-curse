import { ACTIONS_NAMES } from '../constants';
const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  errorMessage: '',
}

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { getUsers, loading, errorMessage} = ACTIONS_NAMES;

  switch(type) {
    case getUsers:
      return {
        ...state,
        usuarios: payload,
        loading:false,
        errorMessage: '',
      }

    case loading:
      console.log('in loading on user reducer')
      return {...state, loading: true}

    case errorMessage:
      return {
        ...state,
        errorMessage: payload,
        loading: false,
      }

    default:
      return state;
  }
}

export default users;
