import React from 'react'
import PropTypes from 'prop-types'
import RouterContext from './RouterContext'

const Router = ({children, path}) => (
  <RouterContext.Provider value={path}>
    {children}
  </RouterContext.Provider>
)

Router.defaultProps = {
  path: '',
}

Router.propTypes = {
  path: PropTypes.string,
}

export default Router
