import React from 'react';
import PropTypes from 'prop-types';

import Users from '../rows';
import Error404 from '../../404/error404';
const Table = ({usuarios, error}) => {
  if (error) return <Error404 />
  return ( 
    <div className='container'>
      <table>
        <thead>
          <tr>
            <td>Post</td>
            <td>User</td>
            <td>email</td>
            <td>website</td>
          </tr>
        </thead>
        <tbody><Users list={usuarios} /></tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  usuarios: PropTypes.array,
  error: PropTypes.string,
};

Table.defaultProps = {
  usuarios: [],
  error: '',
}

export default Table;
