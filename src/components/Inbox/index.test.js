import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByText, getByTestId, queryAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Inbox from './index'

describe('Inbox basic rendering', () => {

  const { container } = render(<Inbox />)

  it('renders one inbox section', () => {
    const inbox = getByTestId(container, 'inbox')
    expect(inbox).toBeInTheDocument()
  })

  it('renders one inbox title', () => {
    const title = getByText(container, 'Inbox')
    expect(title).toBeInTheDocument()
  })

  it('renders 4 post previews', () => {
    const previews = queryAllByTestId(container, 'post-preview')
    expect(previews.length).toBe(4)
  })

  it('renders a title, author and time for each post-preview', () => {
    const previews = queryAllByTestId(container, 'post-preview')
    let title, author, time
    previews.forEach(preview => {
      title = getByTestId(preview, 'preview-title')
      author = getByTestId(preview, 'preview-author')
      time = getByTestId(preview, 'preview-time')

      expect(title).toBeInTheDocument()
      expect(author).toBeInTheDocument()
      expect(time).toBeInTheDocument()
    })
  })

  // it('renders the Loading component when there are no posts', () => {

  // })

})

describe('Inbox mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Inbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
