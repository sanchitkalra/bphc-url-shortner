import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Provider} from 'react-redux'

import Landing from './pages/Landing'
import Dashboard from './pages/App'
import LinkForward from './pages/LinkForward'
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";

import PrivateRoute from './PrivateRoute'
import firebaseRef from './firebaseRef';
import PublicRoute from './PublicRoute';
import store from './store'
import AppNav from './Nav';

function App() {

  React.useEffect(() => {
    console.log('app render')
    function authListener() {
        firebaseRef.auth().onAuthStateChanged((user) => {
          console.log(user)
            if (user) {
              store.dispatch({
                type: "SET_USER",
                payload: {user}
              })
            }
        })
    }
    
    authListener()
  }, [])

  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

// export default App;
export default React.memo(App);