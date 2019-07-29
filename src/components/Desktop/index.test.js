import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Desktop from './index'

describe('Desktop basic rendering', () => {

  it('renders 1 desktop div', () => {
    const { container } = render(<Desktop />)
    const desktop = getByTestId(container, 'desktop')
    expect(desktop).toBeInTheDocument()
  })

  it('renders 1 Nav component', () => {
    const { container } = render(<Desktop />)
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders 1 main-content element', () => {
    const { container } = render(<Desktop />)
    const main = getByTestId(container, 'main')
    expect(main).toBeInTheDocument()
  })

  it('renders 1 Inbox component', () => {
    const { container } = render(<Desktop />)
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
  })

  it('renders 1 News component', () => {
    const { container } = render(<Desktop />)
    const news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
  })

  it('renders 1 Weather component', () => {
    const { container } = render(<Desktop />)
    const weather = getByTestId(container, 'weather')
    expect(weather).toBeInTheDocument()
  })

})

describe('Desktop conditional rendering', () => {

  it('renders the correct view based on user input', () => {
    const { container } = render(<Desktop />)

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

describe('Desktop mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Desktop />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
