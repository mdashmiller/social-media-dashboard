import React from 'react'

import { getByTestId, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Mobile from './index'

import { setUp, renderAndUnmount } from '../../../Utils'

describe('Mobile mounting and ummounting', () => {

  it('renders without crashing', () => {
    renderAndUnmount(<Mobile />)
  })

})

describe('Mobile basic rendering', () => {

  let container
  beforeEach(() => {
    container = setUp(<Mobile />)
  })

  afterEach(cleanup)

  it('renders 1 mobile div', () => {
    const mobile = getByTestId(container, 'mobile')
    expect(mobile).toBeInTheDocument()
  })

  it('renders 1 Nav component', () => {
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders 1 main-content element', () => {
    const main = getByTestId(container, 'main')
    expect(main).toBeInTheDocument()
  })

})

describe('Mobile conditional rendering', () => {

  let container
  beforeEach(() => {
    container = setUp(<Mobile />)
  })

  afterEach(cleanup)

  it('renders the correct view based on user input', () => {
    // create testable navigation buttons
    const inboxButton = getByTestId(container, 'view-inbox-button')
    const notificationsButton = getByTestId(container, 'view-notifications-button')
    const composeButton = getByTestId(container, 'compose-button')
    const newsButton = getByTestId(container, 'view-news-button')
    const weatherButton = getByTestId(container, 'view-weather-button')
    const editProfileButton = getByTestId(container, 'edit-profile-button')

    // default view
    let inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()

    // notifications view
    fireEvent.click(notificationsButton)
    let notifications = getByTestId(container, 'notifications')
    expect(notifications).toBeInTheDocument()
    expect(inbox).not.toBeInTheDocument()

    // compose view
    fireEvent.click(composeButton)
    let compose = getByTestId(container, 'compose')
    expect(compose).toBeInTheDocument()
    expect(notifications).not.toBeInTheDocument()

    // news view
    fireEvent.click(newsButton)
    let news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
    expect(compose).not.toBeInTheDocument()

    // weather view
    fireEvent.click(weatherButton)
    let weather = getByTestId(container, 'weather')
    expect(weather).toBeInTheDocument()
    expect(news).not.toBeInTheDocument()

    // edit profile view
    fireEvent.click(editProfileButton)
    let editProfile = getByTestId(container, 'edit-profile')
    expect(editProfile).toBeInTheDocument()
    expect(weather).not.toBeInTheDocument()

    // inbox view
    fireEvent.click(inboxButton)
    inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
    expect(editProfile).not.toBeInTheDocument()
  })

})
