import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { checkProps } from '../../../Utils'

import Nav from './index'

import * as myFunctions from '../../functions'

describe('Nav basic rendering', () => {

  const navOptions = [
    {id: 0, action: 'test', label: 'test'}
  ]
  const { container } = render(<Nav view={'any'} setView={() => {}} screen={'any'} navOptions={navOptions} />) 

  it('renders one nav element', () => {
    const nav = getByTestId(container, 'nav')
    expect(nav).toBeInTheDocument()
  })

  it('renders one nav-list ul', () => {
    const navList = getByTestId(container, 'nav-list')
    expect(navList).toBeInTheDocument()
  })

})

describe('Nav conditional rendering', () => {

  let navOptions

  describe('rendering for mobile screens', () => {

    navOptions = [
      { id: 1, action: 'view-inbox', label: 'inbox' },
      { id: 2, action: 'view-notifications', label: 'notifications' },
      { id: 3, action: 'compose', label: 'new post' },
      { id: 4, action: 'view-news', label: 'news' },
      { id: 5, action: 'view-weather', label: 'weather' },
      { id: 6, action: 'edit-profile', label: 'edit profile' }
    ]
    const { container } = render(<Nav view={'any'} setView={() => { }} screen={'mobile'} navOptions={navOptions} />)

    it('renders 6 list items', () => {
      const navList = getByTestId(container, 'nav-list')
      expect(navList.children.length).toBe(6)
    })

    it('renders 1 inbox button', () => {
      const inboxButton = getByTestId(container, 'view-inbox-button')
      expect(inboxButton).toBeInTheDocument()
    })

    it('renders 1 notifications button', () => {
      const notificationsButton = getByTestId(container, 'view-notifications-button')
      expect(notificationsButton).toBeInTheDocument()
    })

    it('renders 1 compose button', () => {
      const composeButton = getByTestId(container, 'compose-button')
      expect(composeButton).toBeInTheDocument()
    })

    it('renders 1 weather button', () => {
      const weatherButton = getByTestId(container, 'view-weather-button')
      expect(weatherButton).toBeInTheDocument()
    })

    it('renders 1 news button', () => {
      const newsButton = getByTestId(container, 'view-news-button')
      expect(newsButton).toBeInTheDocument()
    })

    it('renders 1 edit profile button', () => {
      const editProfileButton = getByTestId(container, 'edit-profile-button')
      expect(editProfileButton).toBeInTheDocument()
    })

  })

  describe('rendering for tablet screens', () => {

    navOptions = [
      { id: 1, action: 'view-notifications', label: 'notifications' },
      { id: 2, action: 'compose', label: 'new post' },
      { id: 3, action: 'view-news', label: 'news' },
      { id: 4, action: 'view-weather', label: 'weather' },
      { id: 5, action: 'edit-profile', label: 'edit profile' }
    ]
    const { container } = render(<Nav view={'any'} setView={() => { }} screen={'tablet'} navOptions={navOptions} />)

    it('renders 5 list items', () => {
      const navList = getByTestId(container, 'nav-list')
      expect(navList.children.length).toBe(5)
    })

    it('renders 1 notifications button', () => {
      const notificationsButton = getByTestId(container, 'view-notifications-button')
      expect(notificationsButton).toBeInTheDocument()
    })

    it('renders 1 compose button', () => {
      const composeButton = getByTestId(container, 'compose-button')
      expect(composeButton).toBeInTheDocument()
    })

    it('renders 1 weather button', () => {
      const weatherButton = getByTestId(container, 'view-weather-button')
      expect(weatherButton).toBeInTheDocument()
    })

    it('renders 1 news button', () => {
      const newsButton = getByTestId(container, 'view-news-button')
      expect(newsButton).toBeInTheDocument()
    })

    it('renders 1 edit profile button', () => {
      const editProfileButton = getByTestId(container, 'edit-profile-button')
      expect(editProfileButton).toBeInTheDocument()
    })

  })

  describe('rendering for desktop screens', () => {

    navOptions = [
      { id: 1, action: 'view-notifications', label: 'notifications' },
      { id: 2, action: 'compose', label: 'new post' },
      { id: 3, action: 'edit-profile', label: 'edit profile' }
    ]
    const { container } = render(<Nav view={'any'} setView={() => { }} screen={'desktop'} navOptions={navOptions} />)

    it('renders 3 list items', () => {
      const navList = getByTestId(container, 'nav-list')
      expect(navList.children.length).toBe(3)
    })

    it('renders 1 notifications button', () => {
      const notificationsButton = getByTestId(container, 'view-notifications-button')
      expect(notificationsButton).toBeInTheDocument()
    })

    it('renders 1 compose button', () => {
      const composeButton = getByTestId(container, 'compose-button')
      expect(composeButton).toBeInTheDocument()
    })

    it('renders 1 edit profile button', () => {
      const editProfileButton = getByTestId(container, 'edit-profile-button')
      expect(editProfileButton).toBeInTheDocument()
    })

  })

})

describe('calling the handleNavClick function', () => {

  const mockHandleNavClick = jest.spyOn(myFunctions, 'handleNavClick')
  const mockSetView = () => {}
  const navOptions = [
    { id: 1, action: 'view-inbox', label: 'inbox' },
    { id: 2, action: 'view-notifications', label: 'notifications' },
    { id: 3, action: 'compose', label: 'new post' },
    { id: 4, action: 'view-news', label: 'news' },
    { id: 5, action: 'view-weather', label: 'weather' },
    { id: 6, action: 'edit-profile', label: 'edit profile' }
  ]
  const { container } = render(<Nav view={'any'} setView={mockSetView} screen={'mobile'} navOptions={navOptions} />)

  const tests = (field) => {
    expect(mockHandleNavClick).toHaveBeenCalledTimes(1)
    expect(mockHandleNavClick).toHaveBeenCalledWith('mobile', 'any', field, mockSetView)
    mockHandleNavClick.mockClear()
  }

  it('is called with the correct values', () => {
    const inboxButton = getByTestId(container, 'view-inbox-button')
    fireEvent.click(inboxButton)
    tests('inbox')

    const notificationsButton = getByTestId(container, 'view-notifications-button')
    fireEvent.click(notificationsButton)
    tests('notifications')

    const composeButton = getByTestId(container, 'compose-button')
    fireEvent.click(composeButton)
    tests('new post')

    const weatherButton = getByTestId(container, 'view-weather-button')
    fireEvent.click(weatherButton)
    tests('weather')

    const newsButton = getByTestId(container, 'view-news-button')
    fireEvent.click(newsButton)
    tests('news')

    const editProfileButton = getByTestId(container, 'edit-profile-button')
    fireEvent.click(editProfileButton)
    tests('edit profile')
  })

})

describe('receiving props', () => {

  it('recieves props correctly', () => {
    let result = checkProps(
      Nav, 
      {
        view: 'any',
        setView: () => {},
        screen: 'any',
        navOptions: [
          { id: 1, action: 'view-inbox', label: 'inbox' },
          { id: 2, action: 'view-notifications', label: 'notifications' },
          { id: 3, action: 'compose', label: 'new post' },
          { id: 4, action: 'view-news', label: 'news' },
          { id: 5, action: 'view-weather', label: 'weather' },
          { id: 6, action: 'edit-profile', label: 'edit profile' }
        ]
      }
    )

    expect(result === undefined)
  })

})

describe('Nav mounting and ummounting', () => {
  
  const navOptions = [
    { id: 1, action: 'view-inbox', label: 'inbox' },
    { id: 2, action: 'view-notifications', label: 'notifications' },
    { id: 3, action: 'compose', label: 'new post' },
    { id: 4, action: 'view-news', label: 'news' },
    { id: 5, action: 'view-weather', label: 'weather' },
    { id: 6, action: 'edit-profile', label: 'edit profile' }
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav view={'any'} setView={() => {}} screen={'mobile'} navOptions={navOptions} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
