import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodosAction } from '../../actions/getTodos';
class Todos extends Component {
  
  componentDidMount() {
    this.props.getTodosAction();
  }

  render() {
    console.log('on todos component! ->', this.props)
    return (
      <div>Todos!</div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
});

const mapDispatchToProps = {
  getTodosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
