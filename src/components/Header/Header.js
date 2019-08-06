import React from 'react'
import PropTypes from 'prop-types'

import Nav from '../Nav'
import Logo from '../Logo/Logo'
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar'

const Header = ({ screen, view, setView, navOptions }) => {
  return (
    <header>
      <Nav screen={screen} view={view} setView={setView} navOptions={navOptions} />
      <Logo />
      <ProfileAvatar setView={setView} />
    </header>
  )
}

Header.propTypes = {
  screen: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  navOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired
}

export default Header
