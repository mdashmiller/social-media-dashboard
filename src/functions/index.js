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
