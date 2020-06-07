import React from 'react';

import Spinner from '../spinner/spinner';
import Fail from '../Fail';
import '../../css/components/comments.css';

const Comentarios = props => {
  const { comments, errorMessageComments, loadingComments } = props;
  if (errorMessageComments) return <Fail message={errorMessageComments} />
  if (loadingComments && comments.length === 0) return <Spinner />

  const allComments = () => (comments.map(comment => (
    <li key={comment.id}>
      <small>{comment.name}</small>
      <p className='body-comment'>{comment.body}</p>
    </li>
  )))
  return (
    <ul>
      {allComments()}
    </ul>
  )
}

export default Comentarios