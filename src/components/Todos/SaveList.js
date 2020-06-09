import React, { Component } from 'react';

import { connect } from 'react-redux';
import { handleChange } from '../../actions/getTodos';
class SaveList extends Component {
  handleInput = (e) => {
    const { handleChange } = this.props;
    handleChange(e.target)
  }
  render() {
    console.log('this.props->', this.props)
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.todosReducer,
});

const mapDispatchToProps = {
  handleChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveList);
