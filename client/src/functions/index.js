export const handleNavClick = (screen, currentView, clickedView, setView) => {
  if (screen === 'mobile') {
    setView(clickedView)
  } else {
    if (currentView === clickedView) {
      setView('')
    } else {
      setView(clickedView)
    }
  }
}

export const handleMobileNavClick = (setNavMenuOpen, currentView, clickedView, setView) => {
  setNavMenuOpen(false)
  handleNavClick('mobile', currentView, clickedView, setView)
}

export const handleOutsideNavClick = (event, node, setNavMenuOpen) => {
  if (node.current.contains(event.target)) {
    return
  } else {
    setNavMenuOpen(false)
  }
}

export const handleFormChange = (event, callback) => {
  callback(event.target.value)
}

export const handleEditFormSubmit = (event, userInput, callback) => {
  event.preventDefault()
  console.log(userInput)
  callback('')
}
