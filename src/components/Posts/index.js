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
      postsReducer: { loadingPosts, errorMessagePost },
      postsReducer: { posts },
      usariosReducer: { loading, errorMessage, usuarios },
      match: { params: { key } },
    } = this.props;

    if (errorMessagePost) return <Fail message={errorMessagePost} />
    
    if (!usuarios.length 
      || loading
      || loadingPosts
      || !posts.length
    ) return <Spinner />
      
    if (!('postId' in usuarios[key])) return false;

    const index = posts.length - 1

    return (
      <>
        <h1>Publicaciones de { usuarios[key].name }</h1>
        {posts[index].map(post => (
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
