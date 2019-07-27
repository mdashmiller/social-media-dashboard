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
