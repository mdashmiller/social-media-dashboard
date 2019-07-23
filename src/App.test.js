import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

describe('App basic rendering', () => {

  it('renders 1 main div', () => {
    const { container } = render(<App />)
    const main = getByTestId(container, 'main')
    expect(main).toBeInTheDocument()
  })

  describe('App conditional rendering', () => {

  })

})

describe('setView', () => {

  it('the view is changed when the button is clicked', () => {
    const { container } = render(<App />)
    const inbox = getByTestId(container, 'inbox')
    const button = getByTestId(container, 'button')

    expect(inbox).toBeInTheDocument()

    fireEvent.click(button)

    const weather = getByTestId(container, 'weather')

    expect(weather).toBeInTheDocument()
    expect(inbox).not.toBeInTheDocument()
  })

})

describe('App mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
