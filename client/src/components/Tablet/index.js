import React, { useState } from 'react'

import Nav from '../Nav'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import Compose from '../Compose'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

const Tablet = () => {
  const [view, setView] = useState('')

  const navOptions = [
    { id: 1, action: 'view-notifications', label: 'notifications' },
    { id: 2, action: 'compose', label: 'new post' },
    { id: 3, action: 'view-news', label: 'news' },
    { id: 4, action: 'view-weather', label: 'weather' },
    { id: 5, action: 'edit-profile', label: 'edit profile' }
  ]

  return (
    <div data-testid="tablet">
      <Nav view={view} setView={setView} screen={'tablet'} navOptions={navOptions} />
      <main data-testid="main">
        <Inbox />
        {view === 'notifications' && <Notifications />}
        {view === 'new post' && <Compose />}
        {view === 'news' && <News />}
        {view === 'weather' && <Weather />}
        {view === 'edit profile' && <EditProfile />}
      </main>
    </div>
  )
}

export default Tablet
