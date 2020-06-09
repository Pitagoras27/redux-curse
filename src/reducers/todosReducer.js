import * as todos from '../constants';

const { TODOS: typesTodoList } = todos;

const INITIAL_STATE = {
  todos: {},
  loadingTodos: false,
  errorMessageTodos: '',
  tasks: {},
  saveTask: {},
}

const todosList = (state = INITIAL_STATE, action) => {
  const {
    loading,
    getTodos,
    errorMessageTodos,
    setTasks,
    saveTask,
  } = typesTodoList;

  const { type, payload } = action;

  switch(type) {
    case loading:
      return {
        ...state,
        loadingTodos: payload,
        errorMessageTodos: '',
      }
    case getTodos:
      return {
        ...state,
        loadingTodos: false,
        todos: payload,
        errorMessageTodos: '',
      }
    case errorMessageTodos:
      console.log('payload errorMessageTodos->', payload);
      return {
        ...state,
        loadingTodos: false,
        errorMessageTodos: payload
      }
    case setTasks:
      return {
        ...state,
        tasks: payload
      }
    case saveTask:
      return {
        ...state,
        saveTask: payload,

      }
    default: 
      return {
        ...state,
      }
  }
}

export default todosList;
