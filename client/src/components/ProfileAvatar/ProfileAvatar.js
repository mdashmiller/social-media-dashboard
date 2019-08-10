import React from 'react'
import PropTypes from 'prop-types'

const ProfileAvatar = ({ setView }) => {
  return (
    <button onClick={() => setView('edit profile')}>MM</button>
  )
}

ProfileAvatar.propTypes = {
  setView: PropTypes.func.isRequired
}

export default ProfileAvatar
