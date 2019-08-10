import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, getByText, queryAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import News from './index'

describe('News basic rendering', () => {
 
  const { container } = render(<News />)

  it('renders one news section', () => {
    const news = getByTestId(container, 'news')
    expect(news).toBeInTheDocument()
  })

  it('renders one news title', () => {
    const title = getByText(container, 'News')
    expect(title).toBeInTheDocument()
  })

  it('renders 4 headlines', () => {
    const headlines = queryAllByTestId(container, 'headline')
    expect(headlines.length).toBe(4)
  })

  // it('creates a link for each headline with the correct url', () => {

  // })

  // it('renders the Loading component when there are no headlines', () => {

  // })

})

describe('News mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<News />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
