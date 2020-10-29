import React, {isValidElement, cloneElement, useContext} from 'react'
import PropTypes from 'prop-types'
import RouterContext from './RouterContext'
import {isMatch, getParams} from './path-util'

const Route = ({children, route}) => {
  if (route == null || route === '')
    return children
  const path = useContext(RouterContext)
  if (!isMatch(path, route))
    return null
  return React.Children.map(children, child => (
    isValidElement(child)
      ? cloneElement(child, getParams(path, route))
      : child
  ))
}

Route.propTypes = {
  route: PropTypes.string,
}

export default Route
