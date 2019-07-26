import React, { useState } from 'react'

import Nav from '../Nav'
import Inbox from '../Inbox'
import Notifications from '../Notifications'
import News from '../News'
import Weather from '../Weather'
import EditProfile from '../EditProfile'

import { handleChangeView } from '../../functions'

const Mobile = () => {
  const [view, setView] = useState('inbox')

  return (
    <div data-testid="mobile">
      <Nav handleChangeView={handleChangeView} setView={setView} screen={'mobile'} />
      {view === 'inbox' && <Inbox />}
      {view === 'notifications' && <Notifications />}
      {view === 'news' && <News />}
      {view === 'weather' && <Weather />}
      {view === 'edit profile' && <EditProfile />}
    </div>
  )
}

export default Mobile
