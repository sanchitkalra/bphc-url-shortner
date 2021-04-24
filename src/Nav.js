import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Landing from './pages/Landing'
import Dashboard from './pages/App'
import LinkForward from './pages/LinkForward'
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

function AppNav() {
    return (
        <Router>
            <Switch>
            <Route exact path='/'>
                <Landing />
            </Route>
            <PrivateRoute exact path='/app'>
                <Dashboard />
            </PrivateRoute>
            <PublicRoute exact path='/auth'>
                <Auth />
            </PublicRoute>
            <Route exact path='/faq'>
                <FAQ />
            </Route>
            <Route exact path='/:id'>
                <LinkForward />
            </Route>
            </Switch>
        </Router>
    )
}

export default React.memo(AppNav)