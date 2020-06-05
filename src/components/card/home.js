import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as getAll from '../../actions';
import { getAll } from '../../actions';

import Spinner from '../spinner/spinner';
import Table from './table';

import './home.css';

class Home extends Component {
  componentDidMount() {
    const { usuarios } = this.props;
    if(!usuarios.length) {
      this.props.getAll()
    }
  }

  render() {
    const { loading, usuarios, errorMessage } = this.props;
    return ( <> { loading ? <Spinner /> : (
      <Table usuarios={usuarios} error={errorMessage} />
    )} </>)
  }
}

const mapStateToProps = state => state.usariosReducer;

const mapDispatchToProps = {
  getAll,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
