import React from 'react';
import PropTypes from 'prop-types';

const Users = (props) => {
  const { list } = props;
  return list.map(user => {
    return( 
      <tr key={user.id}>
        <td>{user.id}</td>
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
