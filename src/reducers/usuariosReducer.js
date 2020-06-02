const INITIAL_STATE = {
  usuario: [0,1,2,3]
}

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action; 
  switch(type) {
    case 'GET_USERS':
      return{...state, usuarios: payload}
    default:
      return state;
  }
}

export default users;