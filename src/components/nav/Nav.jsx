import React from 'react';
import MenuBtn from '../menuBtn/MenuBtn';

// styles 
import './Nav.scss'

function Nav(props) {
  return (
    <nav className='nav'>
    <ul className='menu'>
    {props.children}              
      </ul>
      <MenuBtn />
</nav>
  );
}

export default Nav;
