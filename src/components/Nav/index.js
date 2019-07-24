import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ changeView }) => {
  return (
    <div data-testid="nav">
      <ul data-testid="nav-list">
        <li>
          <button data-testid="inbox-button" onClick={() => changeView('inbox')}>
            Inbox
          </button>
        </li>
        <li>
          <button data-testid="notifications-button" onClick={() => changeView('notifications')}>
            Notifications
          </button>
        </li>
        <li>
          <button data-testid="weather-button" onClick={() => changeView('weather')}>
            Weather
          </button>
        </li>
        <li>
          <button data-testid="news-button" onClick={() => changeView('news')}>
            News
          </button>
        </li>
        <li>
          <button data-testid="editProfile-button" onClick={() => changeView('edit profile')}>
            Edit Profile
          </button>
        </li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  changeView: PropTypes.func.isRequired
}

export default Nav
