/** @format */

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Router from './components/Router'
import store from './redux/store'
import { name as appName } from './app.json'
import firebase from 'firebase'
class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDV6HAUZQbrfmdtCv7vPeiUpezqflrYozw",
      authDomain: "polyrides-test2.firebaseapp.com",
      databaseURL: "https://polyrides-test2.firebaseio.com",
      projectId: "polyrides-test2",
      storageBucket: "polyrides-test2.appspot.com",
      messagingSenderId: "841128567403"
    };
    firebase.initializeApp(config);
  }
  render(){
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App)
