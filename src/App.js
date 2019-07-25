import React from 'react'

import Mobile from './components/Mobile'
import Tablet from './components/Tablet'
import Desktop from './components/Desktop'

import withSizes from 'react-sizes'
import PropTypes from 'prop-types'

function App({ isMobile, isTablet, isDesktop }) {
  return (
    <div data-testid="main">
      {isMobile && <Mobile />}
      {isTablet && <Tablet />}
      {isDesktop && <Desktop />}
    </div>
  )
}

const mapSizesToProps = sizes => ({
  isMobile: withSizes.isMobile(sizes),
  isTablet: withSizes.isTablet(sizes),
  isDesktop: withSizes.isDesktop(sizes)
})

App.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired
}

export default withSizes(mapSizesToProps)(App)
