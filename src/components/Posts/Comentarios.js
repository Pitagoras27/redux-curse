import React from 'react';

import '../../css/components/comments.css';
const Comentarios = props => {
  const { comments } = props; 
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