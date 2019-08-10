import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import checkPropTypes from 'check-prop-types'

import { middleware } from '../src/store'
import rootReducer from '../src/reducers'

import { render } from '@testing-library/react'

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}

export const setUp = (component, initialState = {}) => {
  const store = testStore(initialState)
  const { container } = render(<Provider store={store}>{component}</Provider>)
  return container
}

export const renderAndUnmount = (component, initialState = {}) => {
  const div = document.createElement('div')
  const store = testStore(initialState)
  ReactDOM.render(<Provider store={store}>{component}</Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
}
