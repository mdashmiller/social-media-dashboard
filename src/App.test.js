import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, getByText, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

describe('App basic rendering', () => {

  it('renders 1 main div', () => {
    const { container } = render(<App />)
    const main = getByTestId(container, 'main')
    expect(main).toBeInTheDocument()
  })

  it('renders 1 Nav component', () => {
    const { container } = render(<App />)
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

})

describe('App conditional rendering', () => {

  it('renders the correct view based on user input', () => {
    const { container } = render(<App />)

    // create testable navigation buttons
    const inboxButton = getByTestId(container, 'inbox-button')
    const notificationsButton = getByTestId(container, 'notifications-button')
    const newsButton = getByTestId(container, 'news-button')
    const weatherButton = getByTestId(container, 'weather-button')
    const editProfileButton = getByTestId(container, 'editProfile-button')

    // default view
    let inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()

    // notifications view
    fireEvent.click(notificationsButton)
    let notifications = getByTestId(container, 'notifications')
    expect(notifications).toBeInTheDocument()
    expect(inbox).not.toBeInTheDocument()

    // news view
    fireEvent.click(newsButton)
    let news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
    expect(notifications).not.toBeInTheDocument()

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

describe('App mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
