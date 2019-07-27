import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Tablet from './index'

describe('Tablet basic rendering', () => {

  it('renders 1 tablet div', () => {
    const { container } = render(<Tablet />)
    const tablet = getByTestId(container, 'tablet')
    expect(tablet).toBeInTheDocument()
  })

  it('renders 1 Nav component', () => {
    const { container } = render(<Tablet />)
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders 1 Inbox component', () => {
    const { container } = render(<Tablet />)
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
  })

})

describe('Tablet conditional rendering', () => {

  it('renders the correct view based on user input', () => {
    const { container } = render(<Tablet />)

    // create testable navigation buttons
    const notificationsButton = getByTestId(container, 'notifications-button')
    const composeButton = getByTestId(container, 'compose-button')
    const newsButton = getByTestId(container, 'news-button')
    const weatherButton = getByTestId(container, 'weather-button')
    const editProfileButton = getByTestId(container, 'editProfile-button')

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

describe('Tablet mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tablet />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
