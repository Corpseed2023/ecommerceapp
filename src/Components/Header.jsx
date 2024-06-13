import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <div className="between-all nav">
      <div>
        <Link className="nav-logo" to="/">
          Logo
        </Link>
      </div>
      <div>
        <ul className="nav-parent">
          <li>
            <Link className="link-tag" to="/">
              Men
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/">
              Women
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/">
              Kids
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/">
              fashion
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/">
              Studio
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/">
              Arrival
            </Link>
          </li>
        </ul>
      </div>
      
     </div>
  )
}

export default Header