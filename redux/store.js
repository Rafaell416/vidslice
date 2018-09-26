import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'


export function initializeStore () {
  return createStore(reducer, applyMiddleware(logger))
}
