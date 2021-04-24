import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

//import AuthStateContext from './AuthContext'

function PrivateRoute({ children, auth, ...rest }) {

    // const user = React.useContext(AuthStateContext);
    console.log('pvt route: ', auth.user)

    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default connect (state => {
    return {auth: state.auth}
}) (PrivateRoute)