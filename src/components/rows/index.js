import React from 'react';

const users = (props) => {
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

export default users;
