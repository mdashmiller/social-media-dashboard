import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

import { checkProps } from '../Utils'

describe('App basic rendering', () => {

  it('renders 1 app div', () => {
    const { container } = render(<App />)
    const app = getByTestId(container, 'app')

    expect(app).toBeInTheDocument()
  })

})

describe('App rendering based on props', () => {

  function resizeWindow(width) {
    window.innerWidth = width
    window.dispatchEvent(new Event('resize'))
  }
  
  function createTestableComponent(width, viewName) {
    const { container } = render(<App />)
    resizeWindow(width)
    return getByTestId(container, viewName)
  }

  const mobile = createTestableComponent(479, 'mobile')
  const tablet = createTestableComponent(728, 'tablet')
  const desktop = createTestableComponent(1024, 'desktop')
  
  it('renders the mobile view correctly', () => {
    resizeWindow(479)
    
    expect(mobile).toBeInTheDocument()
    expect(tablet.location).toBe(undefined)
    expect(desktop.location).toBe(undefined)
  })

  it('renders the tablet view correctly', () => {
    resizeWindow(728)
    
    expect(tablet).toBeInTheDocument()
    expect(mobile.location).toBe(undefined)
    expect(desktop.location).toBe(undefined)
  })

  it('renders the desktop view correctly', () => {
    resizeWindow(1024)
    
    expect(desktop).toBeInTheDocument()
    expect(mobile.location).toBe(undefined)
    expect(tablet.location).toBe(undefined)
  })

})

describe('receiving props', () => {

  it('recieves props correctly', () => {
    let result = checkProps(App, { isMobile: true, isTablet: false, isDesktop: false })
    expect(result === undefined)
  })

})

describe('App mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
