import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as getAll from '../../actions';
import { getAll } from '../../actions';

import Spinner from '../spinner/spinner';
import Table from './table';

import './home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getAll()
  }

  render() {
    const { loading, usuarios, errorMessage } = this.props;
    return ( <> { loading ? <Spinner /> : (
      <Table usuarios={usuarios}  />
    )} </>)
  }
}

const mapStateToProps = state => state.usariosReducer;

const mapDispatchToProps = {
  getAll,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
