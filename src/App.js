import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRout } from './helpers/routes'

import {Home, Signin, Signup, Browse} from './pages'

export function App() {
    const user={}
  return (
    <Router>
        <Switch>
            <IsUserRedirect
                user={user} 
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}>
            <Signin/>
            </IsUserRedirect>

            
            <IsUserRedirect
                user={user} 
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}>
            <Signup/>
            </IsUserRedirect>
            

            
            <ProtectedRout user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRout>
            

            <IsUserRedirect 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.HOME}>
            <Home />
            </IsUserRedirect>

        </Switch>
    </Router>
  );
}
