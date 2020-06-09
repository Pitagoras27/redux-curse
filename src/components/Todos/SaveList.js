import React, { Component } from 'react';

import { connect } from 'react-redux';

import Spinner from '../spinner/spinner';
import Fail from '../Fail';

import { 
  handleChange,
  saveTask,
} from '../../actions/getTodos';

class SaveList extends Component {
  handleInput = (e) => {
    const { handleChange } = this.props;
    handleChange(e.target)
  }

  activeButton = () => {
    const { todos: { tasks } } = this.props;
    const {
      setIdUserList,
      setTitleList,
    } = tasks;

    if (!(setIdUserList) || !(setTitleList)) return true;

    return false;
  }

  handleSend = () => {
    const { saveTask, todos: { tasks } } = this.props;
    const {
      setIdUserList,
      setTitleList,
    } = tasks;

    const newTask = {
			userId: setIdUserList,
			title: setTitleList,
			completed: false
    };

    saveTask(newTask);
  }

  showAction = () => {
    const { errorMessageTodos, loadingTodos } = this.props.todos;
    if (loadingTodos) return <Spinner />
    if (errorMessageTodos) return <Fail message={errorMessageTodos} />

  }
  render() {
    return (
      <div>
        {this.showAction()}
        <h2>Save list</h2>
        User ID: {' '}
        <input
          type='number'
          onChange={this.handleInput}
          name='setIdUserList'
        />
        <br/><br/>
        Title: {' '}
        <input
          type='text'
          onChange={this.handleInput}
          name='setTitleList'
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
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveList);
