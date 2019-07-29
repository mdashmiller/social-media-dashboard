import React from 'react'
import PropTypes from 'prop-types'

import { handleNavClick } from '../../functions'

const Nav = ({ view, setView, screen, navOptions }) => {
  return (
    <nav data-testid="nav">
      <ul data-testid="nav-list">
        {navOptions.map(option =>
          <li key={option.id}>
            <button
              data-testid={`${option.action}-button`}
              type="button"
              onClick={() => handleNavClick(screen, view, option.label, setView)}
            >
              {option.label}
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired,
  navOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default Nav
