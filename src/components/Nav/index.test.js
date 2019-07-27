import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { checkProps } from '../../../Utils'

import Nav from './index'

import * as myFunctions from '../../functions'

describe('Nav basic rendering', () => {

  const { container } = render(<Nav view={'any'} setView={() => {}} screen={'any'} />) 

  it('renders one nav div', () => {
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders one nav-list ul', () => {
    const navList = getByTestId(container, 'nav-list')
    expect(navList).toBeInTheDocument()
  })

})

describe('Nav conditional rendering', () => {

  describe('rendering for mobile screens', () => {

    const { container } = render(<Nav view={'any'} setView={() => {}}  screen={'mobile'} />)

    it('renders 6 list items', () => {
      const navList = getByTestId(container, 'nav-list')
      expect(navList.children.length).toBe(6)
    })

    it('renders 1 inbox button', () => {
      const inboxButton = getByTestId(container, 'inbox-button')
      expect(inboxButton).toBeInTheDocument()
    })

    it('renders 1 notifications button', () => {
      const notificationsButton = getByTestId(container, 'notifications-button')
      expect(notificationsButton).toBeInTheDocument()
    })

    it('renders 1 compose button', () => {
      const composeButton = getByTestId(container, 'compose-button')
      expect(composeButton).toBeInTheDocument()
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

  describe('rendering for tablet screens', () => {

    const { container } = render(<Nav view={'any'} setView={() => {}}  screen={'tablet'} />)

    it('renders 5 list items', () => {
      const navList = getByTestId(container, 'nav-list')
      expect(navList.children.length).toBe(5)
    })

    it('renders 1 notifications button', () => {
      const notificationsButton = getByTestId(container, 'notifications-button')
      expect(notificationsButton).toBeInTheDocument()
    })

    it('renders 1 compose button', () => {
      const composeButton = getByTestId(container, 'compose-button')
      expect(composeButton).toBeInTheDocument()
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

  describe('rendering for desktop screens', () => {

    const { container } = render(<Nav view={'any'} setView={() => {}}  screen={'desktop'} />)

    it('renders 3 list items', () => {
      const navList = getByTestId(container, 'nav-list')
      expect(navList.children.length).toBe(3)
    })

    it('renders 1 notifications button', () => {
      const notificationsButton = getByTestId(container, 'notifications-button')
      expect(notificationsButton).toBeInTheDocument()
    })

    it('renders 1 compose button', () => {
      const composeButton = getByTestId(container, 'compose-button')
      expect(composeButton).toBeInTheDocument()
    })

    it('renders 1 edit profile button', () => {
      const editProfileButton = getByTestId(container, 'editProfile-button')
      expect(editProfileButton).toBeInTheDocument()
    })

  })

})

describe('calling the handleNavClick function', () => {

  const mockHandleNavClick = jest.spyOn(myFunctions, 'handleNavClick')
  const mockSetView = () => {}
  const { container } = render(<Nav view={'any'} setView={mockSetView} screen={'mobile'} />)

  const tests = (field) => {
    expect(mockHandleNavClick).toHaveBeenCalledTimes(1)
    expect(mockHandleNavClick).toHaveBeenCalledWith('mobile', 'any', field, mockSetView)
    mockHandleNavClick.mockClear()
  }

  it('is called with the correct values', () => {
    const inboxButton = getByTestId(container, 'inbox-button')
    fireEvent.click(inboxButton)
    tests('inbox')

    const notificationsButton = getByTestId(container, 'notifications-button')
    fireEvent.click(notificationsButton)
    tests('notifications')

    const composeButton = getByTestId(container, 'compose-button')
    fireEvent.click(composeButton)
    tests('compose')

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
    let result = checkProps(Nav, { view: 'any', setView: () => {}, screen: 'any'})
    expect(result === undefined)
  })

})

describe('Nav mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav view={'any'} setView={() => {}} screen={'any'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
