import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as getAll from '../../actions';
import { getAll } from '../../actions';
import Users from './rows';
import './home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getAll()
  }
  
  render() {
    const { usuarios } = this.props;

    return (
      <div className='container'>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>User</td>
              <td>email</td>
              <td>website</td>
            </tr>
          </thead>
          <tbody><Users list={usuarios} /></tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => state.usariosReducer;

const mapDispatchToProps = {
  getAll,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
