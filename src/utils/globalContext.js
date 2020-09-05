import { createContext } from 'react'

const globalContext = createContext({})

export const { Provider, Consumer } = globalContext

export default globalContext;