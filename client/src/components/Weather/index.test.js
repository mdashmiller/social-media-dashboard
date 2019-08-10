import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Weather from './index'

describe('Weather basic rendering', () => {

  const { container } = render(<Weather />)

  it('renders one weather section', () => {
    const weather = getByTestId(container, 'weather')
    expect(weather).toBeInTheDocument()
  })

  it('renders one weather title', () => {
    const title = getByText(container, 'Weather')
    expect(title).toBeInTheDocument()
  })

  it('renders 1 weather-info div', () => {
    const info = getByTestId(container, 'weather-info')
    expect(info).toBeInTheDocument()
  })

  it('renders a location, icon, temp and description', () => {
    const location = getByTestId(container, 'weather-location')
    const icon = getByTestId(container, 'weather-icon')
    const temperature = getByTestId(container, 'weather-temperature')
    const description = getByTestId(container, 'weather-description')

    expect(location).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(temperature).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  // it('renders 1 Loading component when there is no weather info', () => {

  // })

})

describe('Weather mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Weather />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
