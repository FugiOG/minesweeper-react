import { createContext } from 'react'
import { useContext } from 'react'

import { IContext } from '../types/context.interface'

export const Context = createContext<IContext | null>(null)

export const Provider = Context.Provider

export const useAppContext = () => {
  const data = useContext(Context)
  if (!data) {
    throw new Error('ctx')
  }
  return data
}
