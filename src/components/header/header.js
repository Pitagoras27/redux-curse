import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/'>Usuarios</Link>
      <Link to='/tareas'>Homework</Link>
    </div>
  )
}

export default Header;
