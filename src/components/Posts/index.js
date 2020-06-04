import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as getAll from '../../actions';
import { getPostForUser } from '../../actions/getAllPosts';

class Post extends Component {
  componentDidMount() {
    const {
      match,
      usariosReducer,
      getAll,
      getPostForUser,
    } = this.props;

    if(!usariosReducer.usuarios.length) {
      getAll();
    }
    getPostForUser(match.params.key);
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

const mapStateToProps = ({usariosReducer, postsReducer}) => ({
  usariosReducer,
  postsReducer,
});

const mapDispathToProps = {
  ...getAll,
  getPostForUser
}

export default connect(mapStateToProps, mapDispathToProps)(Post);
