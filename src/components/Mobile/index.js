import React, { useState } from 'react'

import Header from '../Header/Header'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import Compose from '../Compose'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

const Mobile = () => {
  const [view, setView] = useState('inbox')

  const navOptions = [
    { id: 1, action: 'view-inbox', label: 'inbox' },
    { id: 2, action: 'view-notifications', label: 'notifications' },
    { id: 3, action: 'compose', label: 'new post' },
    { id: 4, action: 'view-news', label: 'news' },
    { id: 5, action: 'view-weather', label: 'weather' }
  ]

  return (
    <div data-testid="mobile">
      <Header screen={'mobile'} view={view} setView={setView} navOptions={navOptions} />
      <main data-testid="main">
        {view === 'inbox' && <Inbox />}
        {view === 'notifications' && <Notifications />}
        {view === 'new post' && <Compose />}
        {view === 'news' && <News />}
        {view === 'weather' && <Weather />}
        {view === 'edit profile' && <EditProfile />}
      </main>
    </div>
  )
}

export default Mobile
