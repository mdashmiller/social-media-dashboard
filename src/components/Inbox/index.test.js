import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByText, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Inbox from './index'

describe('Inbox basic rendering', () => {

  it('renders one inbox section', () => {
    const { container } = render(<Inbox />)
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
  })

  it('renders one inbox title', () => {
    const { container } = render(<Inbox />)
    const title = getByText(container, 'Inbox')
    expect(title).toBeInTheDocument()
  })

})

describe('Inbox mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Inbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
