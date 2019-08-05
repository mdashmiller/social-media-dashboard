import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderAndUnmount, checkProps } from '../../../../Utils'

import MobileNavMenu from './MobileNav'

import * as myFunctions from '../../../functions'

const navOptions = [
  { id: 1, action: 'view-inbox', label: 'inbox' },
  { id: 2, action: 'view-notifications', label: 'notifications' },
  { id: 3, action: 'compose', label: 'new post' },
  { id: 4, action: 'view-news', label: 'news' },
  { id: 5, action: 'view-weather', label: 'weather' },
  { id: 6, action: 'edit-profile', label: 'edit profile' }
]

function createContainer() {
  const { container } = render(<MobileNavMenu view={'any'} setView={() => { }} screen={'mobile'} navOptions={navOptions} />)
  return container
}

describe('MobileNavMenu mounting and ummounting', () => {

  it('renders without crashing', () => {
    renderAndUnmount(<MobileNavMenu view={'any'} setView={() => {}} screen={'mobile'} navOptions={navOptions} />)
  })

})

describe('MobileNavMenu rendering', () => {

  let container
  
  beforeEach(() => {
    container = createContainer()
  })

  afterEach(cleanup)  

  describe('basic rendering', () => {

    it('renders one mobile nav element', () => {
      const mobileNav = getByTestId(container, 'mobile-nav')
      expect(mobileNav).toBeInTheDocument()
    })

    it('renders one mobile nav button', () => {
      const mobileNavButton = getByTestId(container, 'mobile-nav-button')
      expect(mobileNavButton).toBeInTheDocument()
    })

  })

  // describe('conditional rendering', () => {

  //   describe('when nav menu is closed', () => {



  //   })

  //   describe('when nav menu is open', () => {

  //     it('renders one mobile-nav-list ul', () => {
  //       const mobileNavList = getByTestId(container, 'mobile-nav-list')
  //       expect(mobileNavList).toBeInTheDocument()
  //     })

  //     it('renders 6 list items', () => {
  //       const navList = getByTestId(container, 'nav-list')
  //       expect(navList.children.length).toBe(6)
  //     })

  //     it('renders 1 inbox button', () => {
  //       const inboxButton = getByTestId(container, 'view-inbox-button')
  //       expect(inboxButton).toBeInTheDocument()
  //     })

  //     it('renders 1 notifications button', () => {
  //       const notificationsButton = getByTestId(container, 'view-notifications-button')
  //       expect(notificationsButton).toBeInTheDocument()
  //     })

  //     it('renders 1 compose button', () => {
  //       const composeButton = getByTestId(container, 'compose-button')
  //       expect(composeButton).toBeInTheDocument()
  //     })

  //     it('renders 1 weather button', () => {
  //       const weatherButton = getByTestId(container, 'view-weather-button')
  //       expect(weatherButton).toBeInTheDocument()
  //     })

  //     it('renders 1 news button', () => {
  //       const newsButton = getByTestId(container, 'view-news-button')
  //       expect(newsButton).toBeInTheDocument()
  //     })

  //     it('renders 1 edit profile button', () => {
  //       const editProfileButton = getByTestId(container, 'edit-profile-button')
  //       expect(editProfileButton).toBeInTheDocument()
  //     })

  //   })

  // })

})

// describe('calling the handleNavClick function', () => {

//   const mockHandleNavClick = jest.spyOn(myFunctions, 'handleNavClick')
//   const mockSetView = () => {}
//   const navOptions = [
//     { id: 1, action: 'view-inbox', label: 'inbox' },
//     { id: 2, action: 'view-notifications', label: 'notifications' },
//     { id: 3, action: 'compose', label: 'new post' },
//     { id: 4, action: 'view-news', label: 'news' },
//     { id: 5, action: 'view-weather', label: 'weather' },
//     { id: 6, action: 'edit-profile', label: 'edit profile' }
//   ]
//   const { container } = render(<MobileNavMenu view={'any'} setView={mockSetView} screen={'mobile'} navOptions={navOptions} />)

//   const tests = (field) => {
//     expect(mockHandleNavClick).toHaveBeenCalledTimes(1)
//     expect(mockHandleNavClick).toHaveBeenCalledWith('mobile', 'any', field, mockSetView)
//     mockHandleNavClick.mockClear()
//   }

//   it('is called with the correct values', () => {
//     const inboxButton = getByTestId(container, 'view-inbox-button')
//     fireEvent.click(inboxButton)
//     tests('inbox')

//     const notificationsButton = getByTestId(container, 'view-notifications-button')
//     fireEvent.click(notificationsButton)
//     tests('notifications')

//     const composeButton = getByTestId(container, 'compose-button')
//     fireEvent.click(composeButton)
//     tests('new post')

//     const weatherButton = getByTestId(container, 'view-weather-button')
//     fireEvent.click(weatherButton)
//     tests('weather')

//     const newsButton = getByTestId(container, 'view-news-button')
//     fireEvent.click(newsButton)
//     tests('news')

//     const editProfileButton = getByTestId(container, 'edit-profile-button')
//     fireEvent.click(editProfileButton)
//     tests('edit profile')
//   })

// })

// describe('receiving props', () => {

//   it('recieves props correctly', () => {
//     let result = checkProps(
//       MobileNavMenu,
//       {
//         view: 'any',
//         setView: () => {},
//         navOptions: [
//           { id: 1, action: 'view-inbox', label: 'inbox' },
//           { id: 2, action: 'view-notifications', label: 'notifications' },
//           { id: 3, action: 'compose', label: 'new post' },
//           { id: 4, action: 'view-news', label: 'news' },
//           { id: 5, action: 'view-weather', label: 'weather' },
//           { id: 6, action: 'edit-profile', label: 'edit profile' }
//         ]
//       }
//     )

//     expect(result === undefined)
//   })

// })
