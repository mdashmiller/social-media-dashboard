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

  const navOptions = [
    { id: 1, action: 'view-notifications', label: 'notifications' },
    { id: 2, action: 'compose', label: 'new post' },
    { id: 3, action: 'edit-profile', label: 'edit profile' }
  ]

  return (
    <div data-testid="desktop">
      <Nav view={view} setView={setView} screen={'desktop'} navOptions={navOptions} />
      <main data-testid="main">
        <Inbox />
        <News />
        <Weather />
        {view === 'notifications' && <Notifications />}
        {view === 'new post' && <Compose />}
        {view === 'edit profile' && <EditProfile />}
      </main>
    </div>
  )
}

export default Desktop
