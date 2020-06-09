import React, { Component } from 'react';

class SaveList extends Component {
  render() {
    return (
      <div>
        <h2>Save list</h2>
        User ID: {' '}
        <input type='number' />
        <br/><br/>
        Title: {' '}
        <input type='text' />
        <br/><br/>
      </div>
    )
  }
}

export default SaveList;
