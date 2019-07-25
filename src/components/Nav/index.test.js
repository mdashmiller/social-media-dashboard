import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { checkProps } from '../../../Utils'

import Nav from './index'

describe('Nav basic rendering', () => {

  const { container } = render(<Nav changeView={() => {}} />) 

  it('renders one nav div', () => {
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders one nav-list ul', () => {
    const navList = getByTestId(container, 'nav-list')
    expect(navList).toBeInTheDocument()
  })

  it('renders 5 list items', () => {
    const navList = getByTestId(container, 'nav-list')
    expect(navList.children.length).toBe(5)
  })

  it('renders 1 inbox button', () => {
    const inboxButton = getByTestId(container, 'inbox-button')
    expect(inboxButton).toBeInTheDocument()
  })

  it('renders 1 notifications button', () => {
    const notificationsButton = getByTestId(container, 'notifications-button')
    expect(notificationsButton).toBeInTheDocument()
  })
  
  it('renders 1 weather button', () => {
    const weatherButton = getByTestId(container, 'weather-button')
    expect(weatherButton).toBeInTheDocument()
  })

  it('renders 1 news button', () => {
    const newsButton = getByTestId(container, 'news-button')
    expect(newsButton).toBeInTheDocument()
  })

  it('renders 1 edit profile button', () => {
    const editProfileButton = getByTestId(container, 'editProfile-button')
    expect(editProfileButton).toBeInTheDocument()
  })

})

describe('changeView function', () => {

  const changeView = jest.fn()
  const { container } = render(<Nav changeView={changeView} />)
  const tests = (field) => {
    expect(changeView).toHaveBeenCalledTimes(1)
    expect(changeView).toHaveBeenCalledWith(field)
    changeView.mockClear()
  }

  it('is called with the correct value', () => {
    const inboxButton = getByTestId(container, 'inbox-button')
    fireEvent.click(inboxButton)
    tests('inbox')

    const notificationsButton = getByTestId(container, 'notifications-button')
    fireEvent.click(notificationsButton)
    tests('notifications')

    const weatherButton = getByTestId(container, 'weather-button')
    fireEvent.click(weatherButton)
    tests('weather')

    const newsButton = getByTestId(container, 'news-button')
    fireEvent.click(newsButton)
    tests('news')

    const editProfileButton = getByTestId(container, 'editProfile-button')
    fireEvent.click(editProfileButton)
    tests('edit profile')
  })

})

describe('receiving props', () => {

  it('recieves props correctly', () => {
    let result = checkProps(Nav, {changeView: () => {}})
    expect(result === undefined)
  })

})

describe('Nav mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav changeView={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
