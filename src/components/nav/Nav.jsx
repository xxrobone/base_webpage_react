import React from 'react';
import MenuBtn from '../menuBtn/MenuBtn';

// styles 
import './Nav.scss'

function Nav({active, setActive, children}) {
  return (
    <nav className='nav'>
      <ul className={`menu ${active ? 'open' : ''}`}>
    {children}              
      </ul>
      <MenuBtn active={active} setActive={setActive}/>
</nav>
  );
}

export default Nav;
