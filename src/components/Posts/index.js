import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as getAll from '../../actions';
import * as getAllPost from '../../actions/getAllPosts';

class Post extends Component {
  componentDidMount() {
    const { usariosReducer, getAll, getAllPost } = this.props;
    if(!usariosReducer.usuarios.length) {
      getAll();
      getAllPost();
    }
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
  ...getAllPost,
}

export default connect(mapStateToProps, mapDispathToProps)(Post);
