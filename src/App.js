import React, { useState } from 'react'

import Inbox from './components/Inbox'
import Weather from './components/Weather'

function App() {
  const [view, setView] = useState('inbox')

  function toggleView() {
    if (view === 'inbox') {
      setView('weather')
    } else {
      setView('inbox')
    }
  }

  return (
    <div data-testid="main" className="App">
      {view === 'inbox' ? (
        <Inbox />
      ) : (
        null
      )}
      {view === 'weather' ? (
        <Weather />
      ) : (
          null
        )}
      <button data-testid="button" onClick={toggleView}>Change View</button>
    </div>
  )
}

export default App
