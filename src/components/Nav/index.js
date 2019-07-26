import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ handleChangeView, setView, screen }) => {
  return (
    <div data-testid="nav">
      <ul data-testid="nav-list">
        {screen === 'mobile' &&
          <li>
            <button data-testid="inbox-button" onClick={() => handleChangeView('inbox', setView)}>
              Inbox
            </button>
          </li>
        }
        <li>
          <button data-testid="notifications-button" onClick={() => handleChangeView('notifications', setView)}>
            Notifications
          </button>
        </li>
        {screen === 'mobile'|| screen === 'tablet' ? (
          <>
            <li>
              <button data-testid="weather-button" onClick={() => handleChangeView('weather', setView)}>
                Weather
            </button>
            </li>
            <li>
              <button data-testid="news-button" onClick={() => handleChangeView('news', setView)}>
                News
            </button>
            </li>
          </>
        ) : (
          null
        )}
        <li>
          <button data-testid="editProfile-button" onClick={() => handleChangeView('edit profile', setView)}>
            Edit Profile
          </button>
        </li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  handleChangeView: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired
}

export default Nav
