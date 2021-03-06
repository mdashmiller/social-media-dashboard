import React from 'react'

import { getByTestId, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Tablet from './index'

import { setUp, renderAndUnmount } from '../../../Utils'

describe('Tablet mounting and ummounting', () => {

  it('renders without crashing', () => {
    renderAndUnmount(<Tablet />)
  })

})

describe('Tablet basic rendering', () => {

  let container
  beforeEach(() => {
    container = setUp(<Tablet />)
  })

  afterEach(cleanup)

  it('renders 1 tablet div', () => {
    const tablet = getByTestId(container, 'tablet')
    expect(tablet).toBeInTheDocument()
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

})

describe('Tablet conditional rendering', () => {

  let container
  beforeEach(() => {
    container = setUp(<Tablet />)
  })

  afterEach(cleanup)

  it('renders the correct view based on user input', () => {
    // create testable navigation buttons
    const notificationsButton = getByTestId(container, 'view-notifications-button')
    const composeButton = getByTestId(container, 'compose-button')
    const newsButton = getByTestId(container, 'view-news-button')
    const weatherButton = getByTestId(container, 'view-weather-button')
    const editProfileButton = getByTestId(container, 'edit-profile-button')

    // default view
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()

    // notifications view
    fireEvent.click(notificationsButton)
    const notifications = getByTestId(container, 'notifications')
    expect(notifications).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()

    // compose view
    fireEvent.click(composeButton)
    const compose = getByTestId(container, 'compose')
    expect(compose).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(notifications).not.toBeInTheDocument()

    // news view
    fireEvent.click(newsButton)
    const news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(compose).not.toBeInTheDocument()

    // weather view
    fireEvent.click(weatherButton)
    const weather = getByTestId(container, 'weather')
    expect(weather).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(news).not.toBeInTheDocument()

    // edit profile view
    fireEvent.click(editProfileButton)
    const editProfile = getByTestId(container, 'edit-profile')
    expect(editProfile).toBeInTheDocument()
    expect(inbox).toBeInTheDocument()
    expect(weather).not.toBeInTheDocument()
  })

})
