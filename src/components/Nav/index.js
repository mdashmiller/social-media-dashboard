import React from 'react'
import PropTypes from 'prop-types'

import { handleNavClick } from '../../functions'

const Nav = ({ view, setView, screen }) => {
  return (
    <div data-testid="nav">
      <ul data-testid="nav-list">
        {screen === 'mobile' &&
          <li>
          <button data-testid="inbox-button" onClick={() => handleNavClick(screen, view, 'inbox', setView)}>
            Inbox
            </button>
          </li>
        }
        <li>
          <button data-testid="compose-button" onClick={() => handleNavClick(screen, view, 'compose', setView)}>
            New Post
          </button>
        </li>
        <li>
          <button data-testid="notifications-button" onClick={() => handleNavClick(screen, view, 'notifications', setView)}>
            Notifications
          </button>
        </li>
        {screen === 'mobile'|| screen === 'tablet' ? (
          <>
            <li>
              <button data-testid="weather-button" onClick={() => handleNavClick(screen, view, 'weather', setView)}>
                Weather
            </button>
            </li>
            <li>
              <button data-testid="news-button" onClick={() => handleNavClick(screen, view, 'news', setView)}>
                News
            </button>
            </li>
          </>
        ) : (
          null
        )}
        <li>
          <button data-testid="editProfile-button" onClick={() => handleNavClick(screen, view, 'edit profile', setView)}>
            Edit Profile
          </button>
        </li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired
}

export default Nav
