import { ACTIONS_NAMES } from '../constants';
const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  errorMessage: '',
}

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case ACTIONS_NAMES.getUsers:
      return {
        ...state,
        usuarios: payload,
        loading:false,
        errorMessage: '',
      }
    case ACTIONS_NAMES.loading:
      return {...state, loading: true}
    case ACTIONS_NAMES.errorMessage:
      return {
        ...state,
        errorMessage: payload,
        loading:false,
      }
    default:
      return state;
  }
}

export default users;