import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByText, getByTestId, queryAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Notifications from './index'

describe('Notifications basic rendering', () => {

  const { container } = render(<Notifications />)

  it('renders one notifications section', () => {
    const notifications = getByTestId(container, 'notifications')
    expect(notifications).toBeInTheDocument()
  })

  it('renders one notifications title', () => {
    const title = getByText(container, 'Notifications')
    expect(title).toBeInTheDocument()
  })

  it('renders 4 notifications', () => {
    const notifications = queryAllByTestId(container, 'notification')
    expect(notifications.length).toBe(4)
  })

  it('renders a content and time for each notification', () => {
    const notifications = queryAllByTestId(container, 'notification')
    let content, time
    notifications.forEach(notification => {
      content = getByTestId(notification, 'notification-content')
      time = getByTestId(notification, 'notification-time')

      expect(content).toBeInTheDocument()
      expect(time).toBeInTheDocument()
    })
  })

  // it('renders the Loading component when there are no notifications', () => {

  // })

})

describe('Notifications mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notifications />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
