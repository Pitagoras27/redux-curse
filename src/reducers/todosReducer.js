import * as todos from '../constants';

const { TODOS: typesTodoList } = todos;

const INITIAL_STATE = {
  todos: {},
  loadingTodos: false,
  errorTodos: '',
  tasks: {},
  saveTask: {},
}

const todosList = (state = INITIAL_STATE, action) => {
  const {
    loading,
    getTodos,
    errorTodos,
    setTasks,
    saveTask,
  } = typesTodoList;

  const { type, payload } = action;

  switch(type) {
    case loading:
      return {
        ...state,
        loadingTodos: payload,
        errorTodos: '',
      }
    case getTodos:
      return {
        ...state,
        loadingTodos: false,
        todos: payload,
        errorTodos: '',
      }
    case errorTodos: 
      return {
        ...state,
        loadingTodos: false,
        errorTodos: payload
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
