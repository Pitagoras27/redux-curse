const INITIAL_STATE = {
  posts: [],
  loading: false,
  errorMessage: '',
}

const users = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {

    default:
      return state;
  }
}

export default users;