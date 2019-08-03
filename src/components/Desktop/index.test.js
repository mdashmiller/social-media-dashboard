import React from 'react'

import { getByTestId, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Desktop from './index'

import { setUp, renderAndUnmount } from '../../../Utils'

describe('Desktop mounting and ummounting', () => {

  it('renders without crashing', () => {
    renderAndUnmount(<Desktop />)
  })

})

describe('Desktop basic rendering', () => {

  let container
  beforeEach(() => {
    container = setUp(<Desktop />)
  })

  afterEach(cleanup)

  it('renders 1 desktop div', () => {
    const desktop = getByTestId(container, 'desktop')
    expect(desktop).toBeInTheDocument()
  })

  it('renders 1 Nav component', () => {
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders 1 main-content element', () => {
    const main = getByTestId(container, 'main')
    expect(main).toBeInTheDocument()
  })

  it('renders 1 Inbox component', () => {
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
  })

  it('renders 1 News component', () => {
    const news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
  })

  it('renders 1 Weather component', () => {
    const weather = getByTestId(container, 'weather')
    expect(weather).toBeInTheDocument()
  })

})

describe('Desktop conditional rendering', () => {

  let container
  beforeEach(() => {
    container = setUp(<Desktop />)
  })

  afterEach(cleanup)

  it('renders the correct view based on user input', () => {
    // create testable navigation buttons
    const notificationsButton = getByTestId(container, 'view-notifications-button')
    const composeButton = getByTestId(container, 'compose-button')
    const editProfileButton = getByTestId(container, 'edit-profile-button')

    // default view
    const inbox = getByTestId(container, 'inbox')
    const weather = getByTestId(container, 'weather')
    const news = getByTestId(container, 'news')
    expect(inbox).toBeInTheDocument()
    expect(weather).toBeInTheDocument()
    expect(news).toBeInTheDocument()

    // notifications view
    fireEvent.click(notificationsButton)
    const notifications = getByTestId(container, 'notifications')
    expect(notifications).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(weather).toBeInTheDocument()
    expect(news).toBeInTheDocument()

    // compose view
    fireEvent.click(composeButton)
    const compose = getByTestId(container, 'compose')
    expect(compose).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(weather).toBeInTheDocument()
    expect(news).toBeInTheDocument()
    expect(notifications).not.toBeInTheDocument()

    // edit profile view
    fireEvent.click(editProfileButton)
    const editProfile = getByTestId(container, 'edit-profile')
    expect(editProfile).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(weather).toBeInTheDocument()
    expect(news).toBeInTheDocument()
    expect(compose).not.toBeInTheDocument()
  })

})
