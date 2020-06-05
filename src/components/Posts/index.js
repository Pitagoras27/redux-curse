import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as getAll from '../../actions';
import { getPostForUser } from '../../actions/getAllPosts';
import Spinner from '../spinner/spinner';
import Fail from '../Fail';

class Post extends Component {
  async componentDidMount() {
    const {
      getAll,
      getPostForUser,
      match: { params: { key } },
    } = this.props;

    if(!this.props.usariosReducer.usuarios.length) {
      await getAll();
    }
    if(this.props.usariosReducer.errorMessage) {
      return false;
    }
    if (!('postId' in this.props.usariosReducer.usuarios[key])) {
      await getPostForUser(key);
		}
  }

  putContentUser = () => {
    const {
      postsReducer,
      postsReducer: { loadingPosts },
      postsReducer: { posts },
      usariosReducer,
      usariosReducer: { loading, errorMessage, usuarios },
      match: { params: { key } },
    } = this.props;

    if (errorMessage) return <Fail message={errorMessage} />

    let contentPost = parseInt(key) + 1;

    if (!usuarios.length 
      || loading
      || loadingPosts
      || posts.length !== contentPost
    ) return <Spinner />

    return (
      <>
        <h1>Publicaciones de { usuarios[key].name }</h1>
        {posts[key].map(post => (
          <div className='divisor' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    )
  }

  render() {
    return (
      <div className='main-container'>
        {this.putContentUser()}
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
