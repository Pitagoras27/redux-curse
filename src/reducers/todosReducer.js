import * as todos from '../constants';

const { TODOS: typesTodoList } = todos;

const INITIAL_STATE = {
  todos: {},
  loadingTodos: false,
  errorMessageTodos: '',
  tasks: {},
  saveTask: {},
  editTask: {},
  returnListTasks: false,
}

const todosList = (state = INITIAL_STATE, action) => {
  const {
    loading,
    getTodos,
    errorMessageTodos,
    setTasks,
    saveTask,
    editTask,
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
        returnListTasks: false,
        tasks: {},
      }
    case errorMessageTodos:
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
        todos: {},
        returnListTasks: true,
        loadingTodos: false,
        tasks: {}
      }
    case editTask:
      return {
        ...state,
        editTask: payload,
        loadingTodos: false,
        returnListTasks: true,
      }
    default: 
      return {
        ...state,
      }
  }
}

export default todosList;
