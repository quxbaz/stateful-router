import React, {isValidElement, cloneElement, useContext} from 'react'
import PropTypes from 'prop-types'
import RouterContext from './RouterContext'
import {isMatch, getParams} from './path-util'

const Route = ({children, route}) => {
  if (route == null || route === '')
    return children
  if (typeof route === 'string')
    route = [route]
  const path = useContext(RouterContext)
  const firstMatch = route.find(r => isMatch(path, r))
  if (firstMatch == null)
    return null
  return React.Children.map(children, child => (
    isValidElement(child)
      ? cloneElement(child, getParams(path, firstMatch))
      : child
  ))
}

Route.propTypes = {
  route: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default Route
