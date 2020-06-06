import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as getAll from '../../actions';
import * as getPostActions from '../../actions/getAllPosts';
// import { getPostForUser } from '../../actions/getAllPosts';
import Spinner from '../spinner/spinner';
import Fail from '../Fail';

const { getPostForUser: postUser, toogleComments } = getPostActions;
class Post extends Component {
  async componentDidMount() {
    const {
      getAll,
      postUser,
      match: { params: { key } },
    } = this.props;

    if(!this.props.usariosReducer.usuarios.length) {
      await getAll();
    }
    if(this.props.usariosReducer.errorMessage) {
      return false;
    }
    if (!('postId' in this.props.usariosReducer.usuarios[key])) {
      await postUser(key);
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

    return this.showInfo( usuarios, key, posts[index]);
  }

  showInfo = (users, key, posts) => {
    const { toogleComments } = this.props;
    console.log(posts, '<<<')
    return (  
      <>
        <h1>Publicaciones de { users[key].name }</h1>
        {posts.map((post, commentKey) => (
          <div
            className='divisor'
            key={post.id}
            onClick={() => { toogleComments(key, commentKey) }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.open ? 'Open' : 'Close'}
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
  postUser,
  toogleComments,
}

export default connect(mapStateToProps, mapDispathToProps)(Post);
