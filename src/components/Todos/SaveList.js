import React, { Component } from 'react';

import { connect } from 'react-redux';
import { 
  handleChange,
  saveTask,
} from '../../actions/getTodos';

class SaveList extends Component {
  handleInput = (e) => {
    const { handleChange } = this.props;
    handleChange(e.target)
  }

  handleSend = () => {
    const { saveTask, tasks: { tasks } } = this.props;
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
  render() {
    return (
      <div>
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
        <button type='button' onClick={this.handleSend}>Save info</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.todosReducer,
});

const mapDispatchToProps = {
  handleChange,
  saveTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveList);
