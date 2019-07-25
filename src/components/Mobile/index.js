import React, { useState } from 'react'

import Nav from '../Nav'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

const Mobile = () => {
  const [view, setView] = useState('inbox')

  function changeView(viewOption) {
    switch (viewOption) {
      case 'notifications':
        setView('notifications')
        break
      case 'news':
        setView('news')
        break
      case 'weather':
        setView('weather')
        break
      case 'edit profile':
        setView('edit profile')
        break
      default:
        setView('inbox')
    }
  }

  return (
    <div data-testid="mobile">
      <Nav changeView={changeView} />
      {view === 'inbox' && <Inbox />}
      {view === 'notifications' && <Notifications />}
      {view === 'news' && <News />}
      {view === 'weather' && <Weather />}
      {view === 'edit profile' && <EditProfile />}
    </div>
  )
}

export default Mobile
