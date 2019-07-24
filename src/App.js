import React, { useState } from 'react'

import Nav from './components/Nav'
import Inbox from './components/Inbox'
import Notifications from './components/Notifications'
import News from './components/News'
import Weather from './components/Weather'
import EditProfile from './components/EditProfile'

function App() {
  const [view, setView] = useState('inbox')

  function changeView(viewOption) {
    switch(viewOption) {
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
    <div data-testid="main" className="App">
      <Nav changeView={changeView} />
      {view === 'inbox' && <Inbox />}
      {view === 'notifications' && <Notifications />}
      {view === 'news' && <News />}
      {view === 'weather' && <Weather />}
      {view === 'edit profile' && <EditProfile />}
    </div>
  )
}

export default App
