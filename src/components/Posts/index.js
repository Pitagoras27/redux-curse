import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as getAll from '../../actions';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAll } = this.props;
    if(!this.props.usuarios.length) getAll();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de {}</h1>
        {this.props.match.params.key}
      </div>
    )
  }
}

const mapStateToProps = state => state.usariosReducer;

export default connect(mapStateToProps, getAll)(Post);
