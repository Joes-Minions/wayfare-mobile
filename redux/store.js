import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index'

const defaultState = {}
const store = createStore(rootReducer, defaultState,
  composeWithDevTools(applyMiddleware(thunk)))

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
