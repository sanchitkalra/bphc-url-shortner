import React from 'react'

import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import firebaseRef from './firebaseRef';
import store from './store'
import AppNav from './Nav';

function App() {

  React.useEffect(() => {
    console.log('app render')
    function authListener() {
        firebaseRef.auth().onAuthStateChanged((user) => {
          // console.log(user)
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
export default App;