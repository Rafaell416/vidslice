import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'


export function initializeStore (initialState = {}) {
  return createStore(reducer, initialState, applyMiddleware(logger))
}
