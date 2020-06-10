import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Spinner from '../spinner/spinner';
import Fail from '../Fail';

import { 
  handleChange,
  saveTask,
  updateTask,
  cleanForm,
} from '../../actions/getTodos';

class SaveList extends Component {
  componentDidMount () {
    const { 
      match: { params: { userId, todoId }},
      handleChange,
      cleanForm,
      todos: { todos },
    } = this.props;
    if(userId || todoId) {
      const data = todos[userId][todoId];
      handleChange({
        name: 'setIdUserList',
        value: data.id,
      });
      handleChange({
        name: 'setTitleList',
        value: data.title,
      });
    } else {
      cleanForm()
    }
  }

  handleInput = (e) => {
    const { handleChange } = this.props;
    handleChange(e.target)
  }

  activeButton = () => {
    const {
      todos: { tasks, loadingTodos } } = this.props;
    const {
      setIdUserList,
      setTitleList,
    } = tasks;
    
    if (loadingTodos) return true;
    if (!(setIdUserList) || !(setTitleList)) return true;

    return false;
  }

  handleSend = () => {
    const { 
      saveTask,
      todos: { tasks }, 
      todos: { todos },
      match: { params: { userId, todoId }},
      updateTask,
    } = this.props;
    
    const {
      setIdUserList,
      setTitleList,
    } = tasks;

    const newTask = {
      userId: setIdUserList,
      title: setTitleList,
      completed: false,
    };

    if (userId || todoId) {
      const data = todos[userId][todoId]
      const sendObject = {
        ...newTask,
        completed: data.completed,
        title: data.title,
        id: data.id,
      }
      updateTask(sendObject);
    } else {
      saveTask(newTask);
    }
  }

  showAction = () => {
    const { errorMessageTodos, loadingTodos } = this.props.todos;
    if (loadingTodos) return <Spinner />
    if (errorMessageTodos) return <Fail message={errorMessageTodos} />

  }
  render() {
    const { returnListTasks, tasks } = this.props.todos;
    const { setIdUserList, setTitleList } = tasks;
    return (
      <div>
        { returnListTasks ? <Redirect to='/tareas' /> : '' }
        {this.showAction()}
        <h2>Save list</h2>
        User ID: {' '}
        <input
          type='number'
          onChange={this.handleInput}
          name='setIdUserList'
          value={setIdUserList}
        />
        <br/><br/>
        Title: {' '}
        <input
          type='text'
          onChange={this.handleInput}
          name='setTitleList'
          value={setTitleList}
        />
        <br/><br/>
        <button
          type='button'
          onClick={ this.handleSend }
          disabled={ this.activeButton() }
        >
            Save info
          </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
});

const mapDispatchToProps = {
  handleChange,
  saveTask,
  updateTask,
  cleanForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveList);
