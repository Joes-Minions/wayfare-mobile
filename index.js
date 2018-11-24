/** @format */

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Router from './Router'
import store from './redux/store'
import { name as appName } from './app.json'
/**
 *  Replaced App with Router
 */
const ReduxApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
/**
 *  Register the reduxed Router component
 */
AppRegistry.registerComponent(appName, () => ReduxApp)
