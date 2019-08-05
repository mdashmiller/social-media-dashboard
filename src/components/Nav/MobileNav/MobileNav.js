import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { handleMobileNavClick, handleOutsideNavClick } from '../../../functions'

function MobileNav({ view, setView, navOptions }) {
  const [navMenuOpen, setNavMenuOpen] = useState(false)
  const node = useRef()

  useEffect(() => {
    document.addEventListener('click', (event) => handleOutsideNavClick(event, node, setNavMenuOpen))
    return () => {
      document.removeEventListener('click', (event) => handleOutsideNavClick(event, node, setNavMenuOpen))
    }
  }, [])

  return (
    <nav data-testid="mobile-nav" ref={node}>
      <button data-testid="mobile-nav-button" onClick={() => setNavMenuOpen(!navMenuOpen)}>NAV</button>
      {navMenuOpen && 
        <ul data-testid="mobile-nav-list">
          {navOptions.map(option =>
            <li key={option.id}>
              <button
                data-testid={`${option.action}-button`}
                type="button"
                onClick={() => handleMobileNavClick(setNavMenuOpen, view, option.label, setView)}
              >
                {option.label}
              </button>
            </li>
          )}
        </ul>
      }
    </nav>
  )
}

MobileNav.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  navOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default MobileNav
