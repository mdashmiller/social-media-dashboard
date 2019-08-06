import React, { useState } from 'react'

import { handleFormChange, handleFormSubmit } from '../../functions'

const EditProfile = () => {
  const [view, setView] = useState('landing')
  const [userInput, setUserInput] = useState('')

  return (
    <section>
      {view === 'landing' ? (
        <>
          <h2>What would you like to edit?</h2>
          <button onClick={() => setView('email')}>EMAIL</button>
          <button onClick={() => setView('username')}>USERNAME</button>
          <button onClick={() => setView('password')}>PASSWORD</button>
        </>
      ) : (
        <>
          <button onClick={() => setView('landing')}>BACK</button>
          <form>
              <h2>Edit {view}</h2>
              <div>
                <label htmlFor={`current ${view}`}>current</label>
                <input type="text" id={`current ${view}`} disabled={true} value={`user's current ${view}`} />
              </div>
              <div>
                <label htmlFor={`new ${view}`}>new</label>
                <input type="text" id={`new ${view}`} name={`${view}`} value={userInput} onChange={e => handleFormChange(e, setUserInput)} />
              </div>
              <div>
                <button type="submit" onClick={e => handleFormSubmit(e, userInput, setUserInput)}>
                  UPDATE
                </button>
              </div>
          </form>
        </>
      )}
    </section>
  )
}

export default EditProfile
