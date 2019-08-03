import React from 'react'

import { getByTestId, getByText, queryAllByTestId, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Inbox from './index'

import { renderAndUnmount, setUp, checkProps } from '../../../Utils'

describe('Inbox mounting and ummounting', () => {

  it('renders without crashing', () => {
    renderAndUnmount(<Inbox />)
  })

})

describe('Inbox basic rendering', () => {

  // describe('rendering when there are no posts', () => {

  // })

  describe('rendering with posts', () => {

    let container
    beforeEach(() => {
      container = setUp(<Inbox />)
    })

    afterEach(cleanup)

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

  })

})

describe('receiving props', () => {

  it('recieves props correctly', () => {
    let result = checkProps(
      Inbox,
      {
        posts: [
          {
            uid: 1,
            author: 'test author',
            title: 'test title',
            content: 'test content',
            time: 1
          }
        ],
        getPosts: () => {}
      }
    )

    expect(result === undefined)
  })

})
