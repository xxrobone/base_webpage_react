import React from 'react'

// styles
import './Nav.scss'

function NavItem({title, path, cls}) {
  return (
    <li className={cls}>
        <a className="nav_link" href={path}>{title}</a>
    </li>
  )
}

export default NavItem