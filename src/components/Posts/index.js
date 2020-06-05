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

  putUser = () => {
    const { 
      usariosReducer: { loading, errorMessage, usuarios },
      match: { params: { key } },
    } = this.props;

    if (!usuarios.length || loading) return <Spinner />

    if (errorMessage) return <Fail message={errorMessage} />
    
    return (
      // 
      <h1>Publicaciones de { usuarios[key].name }</h1>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className='main-container'>
        {this.putUser()}
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
