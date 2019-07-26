import React, { useState } from 'react'

import Nav from '../Nav'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

import { handleChangeView } from '../../functions'

const Desktop = () => {
  const [view, setView] = useState('')

  return (
    <div data-testid="desktop">
      <Nav handleChangeView={handleChangeView} setView={setView} screen={'desktop'} />
      <Inbox />
      <News />
      <Weather />
      {view === 'notifications' && <Notifications />}
      {view === 'edit profile' && <EditProfile />}
    </div>
  )
}

export default Desktop
