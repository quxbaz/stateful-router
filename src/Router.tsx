import React, {ReactNode, FunctionComponent} from 'react'
import RouterContext from './RouterContext'

interface Props {
  path: string,
}

const Router:FunctionComponent<Props> = ({children, path}) => (
  <RouterContext.Provider value={path}>
    {children}
  </RouterContext.Provider>
)

export default Router
