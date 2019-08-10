import React from 'react'
import PropTypes from 'prop-types'

import MobileNav from './MobileNav/MobileNav'

import { handleNavClick } from '../../functions'

const Nav = ({ screen, view, setView, navOptions }) => {
  if (screen === 'mobile') {
    return (
      <MobileNav view={view} setView={setView} navOptions={navOptions} />
    )
  } else {
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
}

Nav.propTypes = {
  screen: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  navOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default Nav
