import React, { useState } from 'react'

import Nav from '../Nav'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import Compose from '../Compose'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

const Mobile = () => {
  const [view, setView] = useState('inbox')

  return (
    <div data-testid="mobile">
      <Nav view={view} setView={setView} screen={'mobile'} />
      {view === 'inbox' && <Inbox />}
      {view === 'notifications' && <Notifications />}
      {view === 'compose' && <Compose />}
      {view === 'news' && <News />}
      {view === 'weather' && <Weather />}
      {view === 'edit profile' && <EditProfile />}
    </div>
  )
}

export default Mobile
