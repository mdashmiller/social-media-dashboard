import React from 'react'
import ReactDOM from 'react-dom'

import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import EditProfile from './index'

describe('EditProfile basic rendering', () => {

  it('renders one editProfile div', () => {
    const { container } = render(<EditProfile />)
    const editProfile = getByTestId(container, 'edit-profile')
    expect(editProfile).toBeInTheDocument()
  })

})

describe('EditProfile mounting and ummounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditProfile />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
