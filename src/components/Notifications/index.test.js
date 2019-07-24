import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Notifications from './index'

describe('Notifications basic rendering', () => {

  it('renders one notifications div', () => {
    const { container } = render(<Notifications />)
    const notifications = getByTestId(container, 'notifications')
    expect(notifications).toBeInTheDocument()
  })

})

describe('Notifications mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notifications />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
