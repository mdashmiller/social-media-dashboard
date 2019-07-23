import checkPropTypes from 'check-prop-types'

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
