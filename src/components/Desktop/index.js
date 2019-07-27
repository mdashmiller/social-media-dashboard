import React, { useState } from 'react'

import Nav from '../Nav'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import Compose from '../Compose'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

const Desktop = () => {
  const [view, setView] = useState('')

  return (
    <div data-testid="desktop">
      <Nav view={view} setView={setView} screen={'desktop'} />
      <Inbox />
      <News />
      <Weather />
      {view === 'notifications' && <Notifications />}
      {view === 'compose' && <Compose />}
      {view === 'edit profile' && <EditProfile />}
    </div>
  )
}

export default Desktop
