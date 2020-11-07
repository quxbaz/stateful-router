import {createContext} from 'react'

type Value = string | null | undefined
const RouterContext = createContext('' as Value)

export default RouterContext
