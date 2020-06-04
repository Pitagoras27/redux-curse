import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Post from '../../Posts';

import '../../../css/components/post.css';

const Users = (props) => {
  const { list } = props;

  return list.map((user, key) => {
    return( 
      <tr key={user.id}>
        <td>
          {
            <Link to={`/post/${key}`}>
              <div className='eye-solid3 icon'>
              </div>
            </Link>
          }
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    )
  });
}

Users.propTypes = {
  list: PropTypes.array,
}

Users.defaultProps = {
  list: [],
}

export default Users;
