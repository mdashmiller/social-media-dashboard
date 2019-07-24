import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Inbox from './index'

describe('Inbox basic rendering', () => {

  it('renders one inbox div', () => {
    const { container } = render(<Inbox />)
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
  })

})

describe('Inbox mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Inbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
