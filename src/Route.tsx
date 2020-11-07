import React, {FunctionComponent, isValidElement, cloneElement, useContext} from 'react'
import RouterContext from './RouterContext'
import {isMatch, getParams} from './path-util'

interface Props {
  children?: any,
  route?: string | string[],
}

const Route: FunctionComponent<Props> = ({children, route}) => {
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

export default Route
