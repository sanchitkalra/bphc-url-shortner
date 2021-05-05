import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'

//import AuthStateContext from './AuthContext'

function PublicRoute({ children, auth, ...rest }) {

    //const user = React.useContext(AuthStateContext);

    // console.log('public route: ', auth.user)
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/app",
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
}) (PublicRoute)